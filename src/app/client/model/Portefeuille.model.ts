import {Devise} from "./devise.enum";
import {ExpenseDTO} from "./expense.model";


export interface PortefeuilleDto {
  id: number;
  utilisateurId: number;
  balance: number;
  devise: Devise;
  expenses: ExpenseDTO[];
}
