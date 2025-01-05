
import { Component, OnInit } from '@angular/core';
import { PortefeuilleService } from '../services/portefeuille-service/portefeuille.service';
import { PortefeuilleDto } from '../model/Portefeuille.model';

@Component({
  selector: 'app-portefeuilles',
  templateUrl: './portefeuilles.component.html',
  styleUrl: './portefeuilles.component.css',
})
export class PortefeuillesComponent implements OnInit {
  portefeuilleActif: PortefeuilleDto | null = null;

  constructor(private portefeuilleService: PortefeuilleService) {}

  ngOnInit(): void {
    // Souscription au portefeuille actif depuis le service
    this.portefeuilleService.portefeuilleActif$.subscribe((portefeuille) => {
      this.portefeuilleActif = portefeuille;
    });
  }

  // Méthode pour calculer le total des dépenses associées
  getTotalExpenses(): number {
    return this.portefeuilleActif?.expenses.reduce((sum, expense) => sum + expense.amount, 0) || 0;
  }

  // Méthode pour calculer le nombre de dépenses associées
  getExpenseCount(): number {
    return this.portefeuilleActif?.expenses.length || 0;
  }
  // fetchPortefeuille(): void {
  //   if (this.portefeuilleId) {
  //     this.portefeuillesService.getBalanceAndDevise(this.portefeuilleId).subscribe({
  //       next: (data) => {
  //         this.balance = data.balance;
  //         this.devise = data.devise;
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.balance = null;
  //         this.devise = null;
  //
  //       }
  //     });
  //   }
  // }
}
