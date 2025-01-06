import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaiementCarteService} from "../../../services/paiement_carte/paiement-carte.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent implements OnInit{
  paymentForm!: FormGroup;
  virtualCards: CarteVirtuelleDTO[] = [];
  createCardForm!: FormGroup;
  isVisible = false;
  title = '';
  message = '';

  showAlert(title: string, message: string): void {
    this.title = title;
    this.message = message;
    this.isVisible = true;
  }

  closeAlert(): void {
    this.isVisible = false;
  }
  constructor(private fb: FormBuilder, private paymentService: PaiementCarteService) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      currency: ['', Validators.required],
      recipient: ['']
    });
    this.loadVirtualCards(5);
  }

  loadVirtualCards(utilisateurId: number) {
    this.paymentService.getVirtualCardsByUserId(utilisateurId).subscribe(
        (cards: CarteVirtuelleDTO[]) => {
          this.virtualCards = cards;
        },
        error => {
          console.error('Error fetching virtual cards', error);
        }
    );
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      const cvv = this.paymentForm.value.cardId;  // This should come from the virtual card selected
      const toCurrency = this.paymentForm.value.currency;
      const amount = this.paymentForm.value.amount;

      this.paymentService.payWithVirtualCard(cvv, toCurrency, amount).subscribe(
          response => {
            this.showAlert('', response);
            // Handle success (e.g., show a confirmation message)
          },
          error => {
            this.showAlert('Paiement réussi', '');
            // Handle error (e.g., show an error message)
          }
      );
    }
  }

  onCancel() {
    this.paymentForm.reset();
  }
}
