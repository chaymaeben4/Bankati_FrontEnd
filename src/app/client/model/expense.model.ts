import {Category} from "./category.enum";
import {Devise} from "./devise.enum";


export interface ExpenseDTO {
  id: number;
  amount: number;
  category: Category;
  devise: Devise;
  description: string;
  portefeuilleId: number;
}
interface CreateExpenseRequest {
  portefeuilleId: number;
  description: string;
  category: string;
  montant: number;
}
