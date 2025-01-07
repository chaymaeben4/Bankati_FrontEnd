import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepenseService} from "../services/depense-service/depense.service";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {Devise} from "../model/devise.enum";
import {CmiService} from "../services/cmi-service/cmi.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-create-portefeuille',
  templateUrl: './create-portefeuille.component.html',
  styleUrl: './create-portefeuille.component.css'
})
export class CreatePortefeuilleComponent implements OnInit {
  devises = Object.values(Devise);
  portefeuilleForm!: FormGroup;
  userId: number= this.userService.getUserId();

  constructor(
    private userService: AuthService,
    private fb: FormBuilder,
    private portefeuilleService: PortefeuilleService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialiser le formulaire
    this.portefeuilleForm = this.fb.group({
      devise: ['', Validators.required],
      balanceInitiale: [null,Validators.required],
    });
  }
  create(): void {
    if (this.portefeuilleForm.valid ) {
      const request = { utilisateurId: this.userId, ...this.portefeuilleForm.value };
      console.log(request);
      this.portefeuilleService.creerPortefeuille(request).subscribe({
        next: (alert) => {
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: alert.alertMessage, status: alert.status },
            width: '500px', // Largeur personnalisée
            panelClass: 'custom-dialog-container', // Classe CSS personnalisée
          });
          this.portefeuilleForm.reset();
          this.router.navigate(['client/portefeuilles']); // Redirection vers la liste des portefeuilles
        },
        error: (err) => {
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: 'Une erreur est survenue lors de la création du portefeuille.', status: false },
          });
          console.error(err);
        },
      });
    } else {
      this.dialog.open(AlertDialogComponent, {
        data: { alertMessage: 'Une erreur est survenue lors de la création du portefeuille.', status: false },
      });
    }
  }
}
