import {Component, OnInit} from '@angular/core';
import {PaiementRecurrent} from "../../../classes/paiement-recurrent";
import {PaiementRecurrentService} from "../../../services/paiement_recurrent/paiement-recurrent.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  paiements: PaiementRecurrent[] = [];
  userId: number = 1; // ID de l'utilisateur, peut être dynamique

  constructor(private paiementService: PaiementRecurrentService) {}

  ngOnInit(): void {
    this.loadPaiements();
  }

  loadPaiements(): void {
    this.paiementService.getPaiementsByUserId(this.userId).subscribe({
      next: (data) => {
        this.paiements = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des paiements', err);
      }
    });
  }
}
