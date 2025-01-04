import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartesVirtuellesService} from "../../../services/cartesVirtuelles/cartes-virtuelles.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";

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



  transactions = [
    { date: '01/12/2024', description: 'Achat en ligne', amount: '-200 MAD', status: 'Complété' },
    { date: '10/11/2024', description: 'Remboursement', amount: '+100 MAD', status: 'Complété' },
    { date: '05/11/2024', description: 'Achat magasin', amount: '-50 MAD', status: 'En attente' },
  ];

  constructor(private route: ActivatedRoute, private carteService: CartesVirtuellesService) {}

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
}
