import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortefeuilleService } from '../services/portefeuille-service/portefeuille.service';
import { ExpenseDTO } from '../model/expense.model';
import { Subscription } from 'rxjs';
import {DepenseService} from "../services/depense-service/depense.service";

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit, OnDestroy {
  depenses: ExpenseDTO[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private portefeuilleService: PortefeuilleService,private depenseService: DepenseService) {
    const storedPortefeuille = localStorage.getItem('portefeuilleActif');
    if (storedPortefeuille) {
      const portefeuille = JSON.parse(storedPortefeuille);
      console.log('Portefeuille chargé depuis localStorage :', portefeuille);
  }}

  ngOnInit(): void {
    // S'abonner au portefeuille actif
    this.subscription = this.portefeuilleService.portefeuilleActif$.subscribe((portefeuilleActif) => {
      if (portefeuilleActif) {
        console.log('Portefeuille actif chargé :', portefeuilleActif);
        // Appeler l'API pour récupérer les dépenses du portefeuille actif
        this.depenseService.getExpensesByPortefeuilleId(portefeuilleActif.id).subscribe((depenses) => {
          this.depenses = depenses;
        });
      } else {
        this.depenses = [];
      }
    });
  }

  ngOnDestroy(): void {
    // Libérer les ressources pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }
}
