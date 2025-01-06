import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransfertArgentService} from "../../services/transfert_argent/transfert-argent-service.service";

@Component({
  selector: 'app-transfert-argent',
  templateUrl: './transfert-argent.component.html',
  styleUrl: './transfert-argent.component.css'
})
export class TransfertArgentComponent {
  transferForm: FormGroup;

  constructor(private fb: FormBuilder, private transferService: TransfertArgentService) {
    this.transferForm = this.fb.group({
      sourceWalletId: ['', Validators.required],
      receiverWalletId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      const { sourceWalletId, receiverWalletId, amount } = this.transferForm.value;

      this.transferService.makePayment(1, receiverWalletId, amount)
          .subscribe({
            next: (response) => {
              alert('Transfert réussi !');
              console.log("hi");
              this.transferForm.reset();
            },
            error: (err) => {
              console.error(err);
              alert('Erreur lors du transfert.');
            }
          });
    }
  }
}
