import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CartesVirtuellesService} from "../../../services/cartesVirtuelles/cartes-virtuelles.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";

@Component({
  selector: 'app-creer-carte',
  templateUrl: './creer-carte.component.html',
  styleUrl: './creer-carte.component.css'
})
export class CreerCarteComponent implements OnInit {
  createCardForm!: FormGroup;

  constructor(private fb: FormBuilder, private cardService: CartesVirtuellesService) { }

  ngOnInit(): void {
    this.createCardForm = this.fb.group({
      currency: ['', Validators.required],
      limit: ['', [Validators.required, Validators.min(1)]],
      validity: ['', Validators.required]
    });
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    if (this.createCardForm.invalid) {
      return;
    }

    // Ici vous devrez définir des valeurs pour id, utilisateurId, numéro de carte, cvv, status, etc.
    const carteVirtuelleDTO = new CarteVirtuelleDTO(5,
        this.createCardForm.value.validity,
        this.createCardForm.value.limit,
        this.createCardForm.value.currency,
        'Active'
    );


    this.cardService.createCard(carteVirtuelleDTO).subscribe({
      next: (response) => {
        alert(response.message); // Affichez le message retourné par le backend
      },
      error: (error) => {
        console.error(error.message);
        alert(error.message); // Affichez l'erreur en cas de problème
      }
    });
  }

  // Méthode pour annuler la création
  onCancel(): void {
    this.createCardForm.reset();
  }
}

