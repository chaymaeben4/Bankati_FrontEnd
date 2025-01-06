import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = '3cfa76ef14937c1c0ea519f8fc057a80fcd04a7420f8e8bcd0a7567c272e007b';

  constructor(private router: Router) {}

  saveToken(token: string): void {
    console.log("token saved");
    console.log(token);
    try {
      localStorage.setItem(this.tokenKey, token);
    } catch (error) {
      console.error("Error saving token to localStorage:", error);
    }  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded token:', decoded);  // Vérifier la structure du token
        return decoded;
      } catch (error) {
        console.error('Failed to decode token', error);
        return null;
      }
    }
    return null;
  }

  getUserRole(): string | null {
    const decodedToken = this.getDecodedToken();
    console.log('Decoded token role:', decodedToken?.ROLE); // Vérifier le rôle
    // Retourner le rôle correct à partir du token
    return decodedToken && decodedToken.ROLE ? decodedToken.ROLE : null;
  }



  getUserId(): number {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken.userId : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('portefeuilleActif');
    this.router.navigate(['/']);
  }
}
