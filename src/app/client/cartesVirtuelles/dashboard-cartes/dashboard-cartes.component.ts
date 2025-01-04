import { Component, OnInit } from '@angular/core';
import {CartesVirtuellesService} from "../../../services/cartesVirtuelles/cartes-virtuelles.service";
import {CarteVirtuelleDTO} from "../../../classes/carte-virtuelle";

@Component({
  selector: 'app-dashboard-cartes',
  templateUrl: './dashboard-cartes.component.html',
  styleUrls: ['./dashboard-cartes.component.css']
})
export class DashboardCartesComponent implements OnInit {
  virtualCards: CarteVirtuelleDTO[] = [];
  utilisateurId: number = 5; // Remplacez par la logique pour obtenir l'ID de l'utilisateur connecté

  constructor(private virtualCardService: CartesVirtuellesService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  // Charger les cartes virtuelles via l'API
  loadCards(): void {
    this.virtualCardService.getVirtualCards(this.utilisateurId).subscribe({
      next: (cards) => {
        this.virtualCards = cards;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cartes :', err);
        alert('Impossible de charger les cartes virtuelles.');
      }
    });
  }

  // Créer une nouvelle carte
  createCard(): void {
  }


  // Bloquer une carte
  blockCard(cardId: number): void {
    const card = this.virtualCards.find(c => c.id === cardId);
    if (card && card.status === 'Active') {
      card.status = 'Blocked';
      alert(`Carte ID : ${cardId} bloquée avec succès.`);
    } else {
      alert(`Impossible de bloquer la carte ID : ${cardId}.`);
    }
  }

  // Supprimer une carte
  deleteCard(cardId: number): void {
    const confirmDelete = confirm(`Êtes-vous sûr de vouloir supprimer la carte ID : ${cardId} ?`);
    if (confirmDelete) {
      this.virtualCards = this.virtualCards.filter(c => c.id !== cardId);
      alert(`Carte ID : ${cardId} supprimée avec succès.`);
    }
  }
}
