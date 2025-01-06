import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {CarteVirtuelleDTO} from "../../classes/carte-virtuelle";
import {Transaction} from "../../classes/transaction/transaction";

@Injectable({
  providedIn: 'root'
})
export class CartesVirtuellesService {

  private apiUrl = 'http://localhost:8082/api/cartes-virtuelles';

  constructor(private http: HttpClient) {}

  getVirtualCards(utilisateurId: number): Observable<CarteVirtuelleDTO[]> {
    return this.http.get<CarteVirtuelleDTO[]>(`${this.apiUrl}/utilisateur/${utilisateurId}`);
  }
  getCarteDetailsByCvv(cvv: string): Observable<CarteVirtuelleDTO> {
    return this.http.get<CarteVirtuelleDTO>(`${this.apiUrl}/${cvv}`);
  }

    createCard(carteVirtuelleDTO: CarteVirtuelleDTO): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(this.apiUrl, carteVirtuelleDTO).pipe(
            catchError(error => {
                console.error("Erreur lors de la création de la carte:", error);
                return throwError(() => new Error(`Erreur lors de la création de la carte: ${error.message}`));
            })
        );
    }

    getTransactionsByCvv(cvv: string): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(`${this.apiUrl}/virtual-card/${cvv}`);
    }
    supprimerCarte(carteId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${carteId}`);
    }

}
