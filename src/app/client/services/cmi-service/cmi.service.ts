import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreationPortefeuilleRequestDto} from "../../model/creation-portefeuille-request.model";
import {Observable} from "rxjs";
import {Alert} from "../../model/alert.model";
import {DemandeAlimentationDto} from "../../model/demande-alimentation.model";
import {PortefeuilleDto} from "../../model/Portefeuille.model";

@Injectable({
  providedIn: 'root'
})
export class CmiService {
  private apiUrl = 'http://localhost:8089/api/cmi';

  constructor(private http: HttpClient) {}

  creerPortefeuille(request: CreationPortefeuilleRequestDto): Observable<Alert> {
    return this.http.post<Alert>(`${this.apiUrl}/creerPortefeuille`, request);
  }

  alimenterPortefeuille(demande: DemandeAlimentationDto): Observable<Alert> {
    return this.http.post<Alert>(`${this.apiUrl}/alimenterPortefeuille`, demande);
  }
}
