import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DepenseService} from "../services/depense-service/depense.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";

@Component({
  selector: 'app-alimenter-depense',
  templateUrl: './alimenter-depense.component.html',
  styleUrl: './alimenter-depense.component.css'
})
export class AlimenterDepenseComponent implements OnInit {
  portefeuilleId!: number;
  depenseId!: number;
  montant!: number;

  alimentationForm!: FormGroup;

  constructor(private portefeuilleService: PortefeuilleService,private route: ActivatedRoute, private expenseService: DepenseService,private router: Router,private fb: FormBuilder) {}

  ngOnInit(): void {
    // Récupère l'ID de la dépense à partir de l'URL
    this.depenseId = +this.route.snapshot.paramMap.get('id')!;
    this.alimentationForm = this.fb.group({
      montant: ['', Validators.required], // Utilisez '' au lieu de 'required'

    });
    // Observer le portefeuille actif et récupérer son ID
    this.portefeuilleService.portefeuilleActif$.subscribe((portefeuille) => {
      if (portefeuille) {
        this.portefeuilleId = portefeuille.id; // Stocker l'ID du portefeuille actif
      }
    });

  }
  alimenterDepense(): void {
    const mnt = this.alimentationForm.get('montant')?.value;
    console.log(mnt);
    this.expenseService.alimenterDepense(this.depenseId, mnt,this.portefeuilleId)
      .subscribe(response => {
        if (response) {
          // Redirige vers une autre page après le succès
          console.log(response)
          this.router.navigate(['client/depenses']);
        } else {
          alert('Une erreur est survenue');
        }
      });
  }
}
