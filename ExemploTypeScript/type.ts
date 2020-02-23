import { User } from "./type4";

class Default {
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: Array<any>;
    array2: any[];
    constructor() {
        this.metodo();
    }
    metodo() {
        this.boleano = true;
        this.numero = 10;
        this.texto = `É um Alert Simples em type script ${this.numero}`;
        this.array = [{
            teste: 'teste'
        }];
        return alert(this.texto);
    }
}

