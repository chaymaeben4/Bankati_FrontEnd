import { Component } from '@angular/core';

@Component({
  selector: 'app-portefeuilles',
  templateUrl: './portefeuilles.component.html',
  styleUrl: './portefeuilles.component.css'
})
export class PortefeuillesComponent {
  isVisible: boolean = false;
  portefeuilles: string[] = ["MAD", "EUR", "USD"];

  togglePortefeuilles(event: Event): void {
    event.preventDefault();
    this.isVisible = !this.isVisible;
  }
}
