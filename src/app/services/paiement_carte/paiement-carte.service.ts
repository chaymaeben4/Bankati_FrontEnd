import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteVirtuelleDTO} from "../../classes/carte-virtuelle";

@Injectable({
  providedIn: 'root'
})
export class PaiementCarteService {

  private apiUrl = 'http://localhost:8083/api/virtual-card';  // Change the base URL as needed
  private apiUrl1 = 'http://localhost:8082/api/cartes-virtuelles/utilisateur';  // Change the base URL as needed


  constructor(private http: HttpClient) { }

  payWithVirtualCard(cvv: string, toCurrency: string, amount: number): Observable<string> {
    const params = new HttpParams()
        .set('toCurrency', toCurrency)
        .set('amount', amount.toString());

    return this.http.post<string>(`${this.apiUrl}/${cvv}`, null, { params });
  }

  getVirtualCardsByUserId(utilisateurId: number): Observable<CarteVirtuelleDTO[]> {
    return this.http.get<CarteVirtuelleDTO[]>(`${this.apiUrl1}/${utilisateurId}`);
  }
}
