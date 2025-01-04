import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PortefeuillesService {
    private apiUrl = 'http://localhost:8083/api';

    constructor(private http: HttpClient) {}


    getBalanceAndDevise(id: number): Observable<{ balance: number; devise: string }> {
        return this.http.get<any>(`${this.apiUrl}/${id}/portefeuille`).pipe(
            map((data) => ({
                balance: data.balance,
                devise: data.devise
            }))
        );
    }
}
