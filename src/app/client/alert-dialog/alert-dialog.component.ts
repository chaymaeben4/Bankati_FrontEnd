import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  template: `
    <div class="custom-alert-dialog">
      <h1>{{ data.status ? 'Succès' : 'Erreur' }}</h1>
      <div>
        <p>{{ data.alertMessage }}</p>
      </div>
      <div>
        <button mat-button mat-dialog-close>Fermer</button>
      </div>
    </div>
  `,
  styles: [
    `
      .custom-alert-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }

      /* Assurez-vous que le contenu principal est en arrière-plan */
      body {
        position: relative;
        z-index: 0;
      }
    `,
  ],
})
export class AlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { alertMessage: string; status: boolean }) {}
}

