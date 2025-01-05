import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {PortefeuilleDto} from "../../model/Portefeuille.model";
import {SoldeResponseDto} from "../../model/solde-response.model";
import {CreationPortefeuilleRequestDto} from "../../model/creation-portefeuille-request.model";
import {DemandeAlimentationDto} from "../../model/demande-alimentation.model";
import {Alert} from "../../model/alert.model";

@Injectable({
  providedIn: 'root'
})
export class PortefeuilleService {

  private portefeuilleActif = new BehaviorSubject<PortefeuilleDto | null>(null); // Le portefeuille actif
  // portefeuilleActif$ = this.portefeuilleActif.asObservable();
  private apiUrl = 'http://localhost:8086/api/portefeuilles'; // L'URL de ton backend Spring Boot
  // private portefeuilleActif = new BehaviorSubject<PortefeuilleDto | null>(
  //   JSON.parse(localStorage.getItem('portefeuilleActif') || 'null')
  // );
  portefeuilleActif$ = this.portefeuilleActif.asObservable();

  setPortefeuilleActif(portefeuille: PortefeuilleDto | null): void {
    console.log('Mise à jour du portefeuille actif :', portefeuille);

    this.portefeuilleActif.next(portefeuille); // Mise à jour du BehaviorSubject

    // Mise à jour dans le localStorage
    if (portefeuille) {
      localStorage.setItem('portefeuilleActif', JSON.stringify(portefeuille));
    } else {
      localStorage.removeItem('portefeuilleActif');
    }
  }
  constructor(private http: HttpClient) {}
  recupererPortefeuilles(utilisateurId: number): Observable<PortefeuilleDto[]> {
    return this.http.get<PortefeuilleDto[]>(`${this.apiUrl}/utilisateur/${utilisateurId}`);
  }
  crediterSoldePortefeuilleActif(credit: number): void {
    const portefeuille = this.portefeuilleActif.getValue();
    if (portefeuille) {
      portefeuille.balance =portefeuille.balance-credit;
      this.setPortefeuilleActif(portefeuille);  // Mettre à jour le portefeuille dans le BehaviorSubject
    }
  }

  creerPortefeuille(request: CreationPortefeuilleRequestDto): Observable<Alert> {
    return this.http.post<Alert>(`${this.apiUrl}/creer`, request);
  }


  // Récupérer un portefeuille par ID
  getPortefeuilleById(id: number): Observable<PortefeuilleDto> {
    return this.http.get<PortefeuilleDto>(`${this.apiUrl}/${id}`);
  }

}
