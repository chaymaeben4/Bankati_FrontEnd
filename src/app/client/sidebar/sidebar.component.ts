import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isVisible: boolean = false; // Contrôle la visibilité de la liste
  portefeuilles: string[] = ["MAD", "EUR", "USD"];

  togglePortefeuilles(event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.isVisible = !this.isVisible; // Bascule la visibilité
  }
}
