import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegisterUserDto} from "../../agent/creer-client/creer-client.component";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8087/api/clients'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  /**
   * Crée un nouveau client
   * @param clientData Les données du client à enregistrer
   * @returns Observable contenant la réponse du backend
   */
  createClient(dto: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}`, dto);
  }
}
