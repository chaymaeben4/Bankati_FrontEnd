import {Component} from '@angular/core';
import {PaiementRecurrentService} from "../../../services/paiement_recurrent/paiement-recurrent.service";
import {PaiementRecurrent} from "../../../classes/paiement-recurrent";
import {Devise} from "../../../classes/enum/Devise";
import {Fournisseur} from "../../../classes/enum/Fournisseur";

@Component({
  selector: 'app-creer-paiement-recurrent',
  templateUrl: './creer-paiement-recurrent.component.html',
  styleUrl: './creer-paiement-recurrent.component.css'
})
export class CreerPaiementRecurrentComponent {
    paiementData: PaiementRecurrent = new PaiementRecurrent(0,Fournisseur.INWI, 1, '', Devise.USD, 0, '', new Date(0));  // Date valide (1er janvier 1970)

    fournisseurs = Object.keys(Fournisseur).map(key => ({
        key: key,
        label: Fournisseur[key as keyof typeof Fournisseur]
    }));
  constructor(private paiementService: PaiementRecurrentService) {}

  onSubmit() {
    this.paiementService.createRecurringPayment(this.paiementData).subscribe(
        response => {
          alert(response)
          // Traitez la réponse ici, par exemple afficher un message de succès
        },
        error => {
          console.error('Erreur lors de la création du paiement:', error);
          // Traitez l'erreur ici
        }
    );
  }
}
