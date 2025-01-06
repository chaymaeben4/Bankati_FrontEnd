import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post<LoginResponse>('http://localhost:8087/auth/login', this.loginForm.value).subscribe({
        next: (response) => {
          console.log("connected");
          console.log(response);
          this.authService.saveToken(response.token);
          this.errorMessage = null;
          const role = this.authService.getUserRole();
          console.log('User role:', role);  // Vérifier que le rôle est bien récupéré
          if (role === 'CLIENT') {
            this.router.navigate(['/client']);
          } else if (role === 'AGENT') {
            this.router.navigate(['/agent']);
          } else if (role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.authService.logout();
          }
        },
        error: (err) => {
          this.errorMessage = 'Échec de la connexion. Veuillez vérifier vos identifiants.';
          console.error('Login failed', err);
        }
      });
    }
  }
}

class LoginResponse {
  token!: string;
  expiresIn!: number;
}
