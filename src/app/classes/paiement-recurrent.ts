import {Devise} from "./enum/Devise";
import {Fournisseur} from "./enum/Fournisseur";

export class PaiementRecurrent {
    id: number;
    userId: number;
    fournisseur : Fournisseur;
    paymentMethod: string;
    currency: Devise;
    amount: number;
    frequency: string; // DAILY, WEEKLY, MONTHLY, YEARLY
    startDate: Date | null;

    constructor(id: number, fournisseur : Fournisseur, userId: number, paymentMethod: string, currency: Devise, amount: number, frequency: string, startDate: Date) {
        this.id = id;
        this.fournisseur = fournisseur;
        this.userId = userId;
        this.paymentMethod = paymentMethod;
        this.currency = currency;
        this.amount = amount;
        this.frequency = frequency;
        this.startDate = startDate || new Date();
    }
}
