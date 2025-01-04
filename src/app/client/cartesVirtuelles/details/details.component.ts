import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartesVirtuellesService} from "../../../services/cartesVirtuelles/cartes-virtuelles.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";
import {Transaction} from "../../../classes/transaction/transaction";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  cvv: string = '';
  carteDetails: { cvv: string; numero_carte: string; date_expiration: Date; utilisateurId: number; id: number; limite: number, devise : string } = {
    id: 0,
    utilisateurId: 0,
    numero_carte: '',
    cvv: '',
    devise: '',
    date_expiration: new Date(),
    limite: 0,
  };

  transactions: Transaction[] = [];



  constructor(private route: ActivatedRoute, private carteService: CartesVirtuellesService , private datePipe : DatePipe ) {}

  ngOnInit(): void {
    // Récupérer le CVV depuis l'URL
    this.cvv = this.route.snapshot.paramMap.get('cvv') || '';

    // Appeler le service pour récupérer les détails de la carte
    this.carteService.getCarteDetailsByCvv(this.cvv).subscribe(
        (data) => {
          this.carteDetails = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de la carte :', error);
        }
    );

    if (this.cvv) {
      this.carteService.getTransactionsByCvv(this.cvv).subscribe(
          data => {
            this.transactions = data;
          },
          error => {
            console.error('Error fetching transactions', error);
          }
      );
    }
  }
  onEditLimit(): void {
    alert('Modifier la limite de la carte.');
  }

  onBlockCard(): void {
    alert('La carte a été bloquée/désactivée.');
  }

  onDeleteCard(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
      alert('La carte a été supprimée.');
    }
  }


  // Méthodes de formatage pour la date, le montant et le statut
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss') || '';
  }


  formatMontant(montant: number): string {
    return montant > 0 ? `-${montant} ` : `${montant} `;
  }

  formatStatut(status: string): string {
    return status === 'COMPLETED' ? 'Complété' : 'En attente';
  }
}
