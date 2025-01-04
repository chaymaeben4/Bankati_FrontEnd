import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteVirtuelleDTO} from "../../classes/carte-virtuelle";

@Injectable({
  providedIn: 'root'
})
export class PaiementCarteService {

  private apiUrl = 'http://localhost:8082/api/cartes-virtuelles';  // Change the base URL as needed


  constructor(private http: HttpClient) { }

  payWithVirtualCard(cvv: string, toCurrency: string, amount: number): Observable<string> {
    const params = new HttpParams()
        .set('toCurrency', toCurrency)
        .set('amount', amount.toString());

    return this.http.post<string>(`${this.apiUrl}/virtual-card/${cvv}`, null, { params });
  }

  getVirtualCardsByUserId(utilisateurId: number): Observable<CarteVirtuelleDTO[]> {
    return this.http.get<CarteVirtuelleDTO[]>(`${this.apiUrl}/utilisateur/${utilisateurId}`);
  }
}
