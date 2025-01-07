import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PaiementRecurrent} from "../../classes/paiement-recurrent";

@Injectable({
  providedIn: 'root'
})
export class PaiementRecurrentService {

  private apiUrl = `http://localhost:8088/api/paiements-recurrents`; // URL de votre backend

  constructor(private http: HttpClient) {}

  createRecurringPayment(dto: PaiementRecurrent): Observable<string> {
    return this.http.post(this.apiUrl, dto, { responseType: 'text' });
  }

  getPaiementsByUserId(userId: number): Observable<PaiementRecurrent[]> {
    return this.http.get<PaiementRecurrent[]>(`${this.apiUrl}/user/${userId}`);
  }
}
