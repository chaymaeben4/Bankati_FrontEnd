import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartesVirtuellesService} from "../../../services/cartesVirtuelles/cartes-virtuelles.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";
import {Transaction} from "../../../classes/transaction/transaction";
import {DatePipe} from "@angular/common";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  cvv: string = '';
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
          console.log(this.carteDetails.id);
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


  onBlockCard(): void {
    alert('La carte a été bloquée/désactivée.');
  }

  onDeleteCard(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
      this.carteService.supprimerCarte(this.carteDetails.id).subscribe({
        next: () => this.showAlert('','Carte supprimée avec succès.'),
        error: (err) => alert('Erreur lors de la suppression : ' + err.message),
      });
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
