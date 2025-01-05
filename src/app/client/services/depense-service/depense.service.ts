import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Alert} from "../../model/alert.model";
import {ExpenseDTO} from "../../model/expense.model";


interface CreateExpenseRequest {
  portefeuilleId: number;
  description: string;
  category: string;
  montant: number;
}
@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private apiUrl = 'http://localhost:8084/depenses_budget/expenses';

  constructor(private http: HttpClient) {}

  createExpense(request: CreateExpenseRequest): Observable<Alert> {
    return this.http.post<Alert>(`${this.apiUrl}/create-from-portefeuille`, request);
  }
  alimenterDepense(depenseId: number, montant: number,portefeuilleId: number): Observable<Alert> {
    return this.http.put<Alert>(`${this.apiUrl}/${portefeuilleId}/${depenseId}/alimenter/${montant}`, {});
  }
  // Récupérer toutes les dépenses par ID de portefeuille
  getExpensesByPortefeuilleId(portefeuilleId: number): Observable<ExpenseDTO[]> {
    return this.http.get<ExpenseDTO[]>(`${this.apiUrl}/all/${portefeuilleId}`);
  }
}
