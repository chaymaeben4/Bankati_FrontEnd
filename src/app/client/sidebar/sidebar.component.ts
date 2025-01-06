import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";
import {PortefeuilleDto} from "../model/Portefeuille.model";
import {Devise} from "../model/devise.enum";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  public portefeuilleActif$ = this.portefeuilleService.portefeuilleActif$;

  isVisible: boolean = false; // Contrôle la visibilité de la liste
  activeItem: string = ''; // Identifiant ou clé de l'élément actif
  portefeuilles: PortefeuilleDto[] = [];
  soldeActif!: number ;
  deviseActif!: Devise;
  portefeuilleActif: PortefeuilleDto | null = null;
  constructor(private userService:AuthService,private router: Router,private cdr: ChangeDetectorRef,private portefeuilleService: PortefeuilleService) {
  }



ngOnInit(): void {
  this.loadPortefeuilles();

  this.portefeuilleService.portefeuilleActif$.subscribe((portefeuille) => {
    if (portefeuille) {
      this.portefeuilleActif = portefeuille;
      this.updateSolde(portefeuille);

      // Force la détection des changements
      this.cdr.detectChanges();
    } else if (this.portefeuilles.length > 0) {
      this.portefeuilleActif = this.portefeuilles[0];
      this.portefeuilleService.setPortefeuilleActif(this.portefeuilles[0]);
      this.updateSolde(this.portefeuilles[0]);

      // Force la détection des changements
      this.cdr.detectChanges();
    }
  });
}

  loadPortefeuilles() {
    this.portefeuilleService.recupererPortefeuilles(this.userService.getUserId()).subscribe(
      (portefeuilles) => {
        this.portefeuilles = portefeuilles;
        console.log('Portefeuilles récupérés :', this.portefeuilles);

        // Si aucun portefeuille actif n'est défini, activer le premier portefeuille par défaut
        if (!this.portefeuilleActif && this.portefeuilles.length > 0) {
          this.portefeuilleActif = this.portefeuilles[0];
          this.portefeuilleService.setPortefeuilleActif(this.portefeuilles[0]);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des portefeuilles :', error);
      }
    );
  }


  // Mettre à jour le solde affiché
  updateSolde(portefeuille: PortefeuilleDto) {
    this.soldeActif = portefeuille.balance;
  }

  // Activer un portefeuille choisi par l'utilisateur
  onSelectPortefeuille(portefeuille: PortefeuilleDto) {
    this.portefeuilleService.setPortefeuilleActif(portefeuille);
  }

  setActiveItem(item: string): void {
    console.log('setActiveItem running')
    this.activeItem = item; // Change l'élément actif

    this.router.navigate(['/client/portefeuilleslist']);
    this.cdr.detectChanges();
    console.log(this.activeItem)
  }

  togglePortefeuilles(event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.isVisible = !this.isVisible; // Bascule la visibilité
  }
}
