import {Devise} from "./enum/Devise";

export class CarteVirtuelleDTO {
    id!: number;
    utilisateurId: number;
    numero_carte!: string;
    cvv!: string;
    date_expiration: Date;  // Vous pouvez utiliser 'Date' si vous voulez travailler directement avec des objets Date
    limite: number;
    devise: Devise;  // Utilisation d'une chaîne pour correspondre à l'énumération Devise en Java
    status: string;

    // Constructeur
    constructor(
        utilisateurId: number,
        date_expiration: Date,
        limite: number,
        devise: Devise,
        status: string
    ) {
        this.utilisateurId = utilisateurId;
        this.date_expiration = date_expiration;
        this.limite = limite;
        this.devise = devise;
        this.status = status;
    }
}
