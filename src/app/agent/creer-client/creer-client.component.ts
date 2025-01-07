import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client/client.service";

export interface RegisterUserDto {
  email: string;
  password: string; // Ajouter un champ pour le mot de passe si nécessaire
  fullName: string;
  role: string; // Adapter selon votre backend (string ou enum)
  nrCompteBancaire: string;
}

@Component({
  selector: 'app-creer-client',
  templateUrl: './creer-client.component.html',
  styleUrls: ['./creer-client.component.css']
})
export class CreerClientComponent {
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pieceIdentite: ['CIN', Validators.required],
      numPiece: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      immatriculation: ['', Validators.required],
      patente: ['', Validators.required],
      description: [''],
      fichier: [null],
      password: ['password'], // Par défaut ou à récupérer dynamiquement
      role: ['CLIENT'], // Rôle par défaut (adapter au besoin)
      nrCompteBancaire: ['123456789'] // Exemple de valeur
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      // Extraire les champs nécessaires pour le DTO
      const dto: RegisterUserDto = {
        email: this.clientForm.value.email,
        password: this.clientForm.value.password,
        fullName: `${this.clientForm.value.nom} ${this.clientForm.value.prenom}`,
        role: this.clientForm.value.role,
        nrCompteBancaire: this.clientForm.value.nrCompteBancaire
      };
      console.log(dto)
      // Envoyer au backend
      this.clientService.createClient(dto).subscribe(
        (response) => {
          console.log('Utilisateur enregistré avec succès', response);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  onCancel(): void {
    this.clientForm.reset();
  }
}
