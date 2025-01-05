import {Component, OnInit} from '@angular/core';
import {ExpenseDTO} from "../model/expense.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";
import {Category} from "../model/category.enum";
import {DepenseService} from "../services/depense-service/depense.service";
import {Alert} from "../model/alert.model";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrl: './create-depense.component.css'
})
export class CreateDepenseComponent implements OnInit {
  categories = Object.values(Category);
  expenseForm!: FormGroup;
  portefeuilleId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private expenseService: DepenseService,
    private portefeuilleService: PortefeuilleService,
    private dialog: MatDialog,
    private router:Router
  ) {}

  ngOnInit(): void {
    // Initialiser le formulaire
    this.expenseForm = this.fb.group({
      description: ['', Validators.required], // Utilisez '' au lieu de 'required'
      category: ['', Validators.required],
      montant: [null, [Validators.required, Validators.min(1)]],
    });


    // Observer le portefeuille actif et récupérer son ID
    this.portefeuilleService.portefeuilleActif$.subscribe((portefeuille) => {
      if (portefeuille) {
        this.portefeuilleId = portefeuille.id; // Stocker l'ID du portefeuille actif
      }
    });
  }
  create(): void {
    if (this.expenseForm.valid && this.portefeuilleId) {
      const request = { portefeuilleId: this.portefeuilleId, ...this.expenseForm.value };
      this.expenseService.createExpense(request).subscribe({
        next: (alert) => {
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: alert.alertMessage, status: alert.status },
            width: '500px', // Largeur personnalisée
            panelClass: 'custom-dialog-container', // Classe CSS personnalisée
          });

          this.portefeuilleService.crediterSoldePortefeuilleActif(this.expenseForm.get('montant')?.value);
          this.router.navigate(['/client/depenses']);
          this.expenseForm.reset();
        },
        error: (err) => {
          this.dialog.open(AlertDialogComponent, {
            data: { alertMessage: 'Une erreur est survenue lors de la création de la dépense.', status: false },
          });
          console.error(err);
        },
      });
    } else {
      this.dialog.open(AlertDialogComponent, {
        data: { alertMessage: 'Veuillez sélectionner un portefeuille actif avant de créer une dépense.', status: false },
      });
    }
  }

}
