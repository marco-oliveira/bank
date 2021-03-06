import { Negociacao } from "./Negociacao";
import {MeuObjeto} from "./MeuObjeto";

export class Negociacoes implements MeuObjeto<Negociacoes>{

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

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.paraArray());
    }
}
