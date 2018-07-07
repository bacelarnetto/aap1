export class Address {
    endereco:string;
    numero:number;
    uf: string;


    constructor(endereco?: string, numero?: number, uf?: string){
        this.endereco = endereco;
        this.numero = numero;
        this.uf =uf;
    }
}
