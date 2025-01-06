import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransfertArgentService {

  private baseUrl = 'http://localhost:8086/api/portefeuilles';

  constructor(private http: HttpClient) {}

  makePayment(senderWalletId: number, receiverWalletId: number, amount: number): Observable<any> {
    const url = `${this.baseUrl}/payment/${senderWalletId}/${receiverWalletId}/${amount}`;
    return this.http.post(url, {});
  }
}
