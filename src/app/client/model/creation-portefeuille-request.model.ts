import {Devise} from "./devise.enum";


export interface CreationPortefeuilleRequestDto {
  utilisateurId: number;
  devise: Devise;
  balanceInitiale: number;
}
