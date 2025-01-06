import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CmiService } from "../services/cmi-service/cmi.service";
import { Devise } from "../model/devise.enum";
import { AlertDialogComponent } from "../alert-dialog/alert-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";
import {PortefeuilleDto} from "../model/Portefeuille.model";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-alimenter-portefeuille',
  templateUrl: './alimenter-portefeuille.component.html',
  styleUrls: ['./alimenter-portefeuille.component.css'] // Correction ici
})
export class AlimenterPortefeuilleComponent implements OnInit {
  portefeuilleId!: number;
  devise!: Devise;
  montant!: number;

  alimentationForm!: FormGroup;
  portefeuilleActif: PortefeuilleDto | null=null;

  constructor(
    private userService: AuthService,
    private cmiService: CmiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private portefeuilleService :PortefeuilleService
  ) {}

  ngOnInit(): void {
    // Récupère l'ID du portefeuille et la devise à partir de l'URL
    this.portefeuilleId = +this.route.snapshot.paramMap.get('id')!;
    this.devise = this.route.snapshot.paramMap.get('devise') as Devise;

    // Initialise le formulaire avec validation pour montant positif
    this.alimentationForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(0.01)]], // Validation
    });
  }

  alimenterPortefeuille(): void {
    if (this.alimentationForm.valid) {
      const request = {
        userId: this.userService.getUserId(), // Valeur statique pour l'utilisateur (à adapter si nécessaire)
        portefeuilleId: this.portefeuilleId,
        montant: this.alimentationForm.get('montant')?.value
      };

      this.cmiService.alimenterPortefeuille(request).subscribe({
        next: (response) => {
          // Vérification ponctuelle du portefeuille actif
          this.portefeuilleService.portefeuilleActif$.subscribe((portefeuille)=> this.portefeuilleActif=portefeuille);
          if (this.portefeuilleActif && this.portefeuilleActif.id === this.portefeuilleId) {
            this.portefeuilleService.getPortefeuilleById(this.portefeuilleId).subscribe({
              next: (portefeuille) => {
                console.log(portefeuille)
                this.portefeuilleService.setPortefeuilleActif(portefeuille);
              },
              error: (err) => {
                console.error("Erreur lors de la récupération du portefeuille actif :", err);
              }
            });
          }

          // Message de succès
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: response.alertMessage, status: response.status },
            width: '500px'
          });

          this.router.navigate(['/client/portefeuilles']);
        },
        error: (err) => {
          console.error('Erreur', err);
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: 'Une erreur est survenue.', status: false }
          });
        }
      });
    } else {
      alert('Veuillez saisir un montant valide.');
    }
  }

}
