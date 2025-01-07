import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PortefeuilleDto} from "../model/Portefeuille.model";
import {PortefeuilleService} from "../services/portefeuille-service/portefeuille.service";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-portefeuille-list',
  templateUrl: './portefeuille-list.component.html',
  styleUrl: './portefeuille-list.component.css'
})
export class PortefeuilleListComponent implements OnInit {
  portefeuilles: PortefeuilleDto[] = [];
constructor(private userService:AuthService,private portefeuilleService: PortefeuilleService,private cdr:ChangeDetectorRef,private dialog: MatDialog) {
}
  ngOnInit(): void {
    this.loadPortefeuilles();
  }

  loadPortefeuilles(): void {
    this.portefeuilleService.recupererPortefeuilles(this.userService.getUserId()).subscribe({
      next: (data) => {
        this.portefeuilles = data;
        console.log('Portefeuilles récupérés:', this.portefeuilles);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des portefeuilles:', err);
      },
    });
  }

  activerPortefeuille(portefeuille: PortefeuilleDto): void {
    this.portefeuilleService.setPortefeuilleActif(portefeuille);

    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: { alertMessage: `Portefeuille Actif avec la Devise ${portefeuille.devise}`, status: true },    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé', result);
    });
    this.cdr.detectChanges();
  }
}
