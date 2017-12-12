import { Negociacao } from "./Negociacao";
import {Imprimivel} from "./Imprimivel";

export class Negociacoes implements Imprimivel{

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log(`____________impressão_____________
        ${JSON.stringify(this._negociacoes)}
        
        `);
    }
}
