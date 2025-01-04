import {Component, OnInit} from '@angular/core';
import {PortefeuillesService} from "../../services/PortefeuillesService";

@Component({
  selector: 'app-portefeuilles',
  templateUrl: './portefeuilles.component.html',
  styleUrl: './portefeuilles.component.css'
})
export class PortefeuillesComponent implements OnInit{
  isVisible: boolean = false;
  portefeuilleId : number = 8;
  balance: number | null = 0;
  devise : string | null = null;
  portefeuilles: string[] = ["MAD", "EUR", "USD"];

  ngOnInit(): void {
    this.fetchPortefeuille();
  }
  constructor(private portefeuillesService : PortefeuillesService) {
  }

  togglePortefeuilles(event: Event): void {
    event.preventDefault();
    this.isVisible = !this.isVisible;
  }
  fetchPortefeuille(): void {
    if (this.portefeuilleId) {
      this.portefeuillesService.getBalanceAndDevise(this.portefeuilleId).subscribe({
        next: (data) => {
          this.balance = data.balance;
          this.devise = data.devise;
        },
        error: (err) => {
          console.error(err);
          this.balance = null;
          this.devise = null;

        }
      });
    }
  }
}
