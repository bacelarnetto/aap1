
import { Address } from './address';

export class UserModel {   
    nome : string;
    idade : number;   
    animal: string;   
    address: Array<Address>;

    constructor(){ 

        this.address = new Array<Address>();
       
    }

}
