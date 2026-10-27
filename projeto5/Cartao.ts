import Pagamento from "./Pagamento"
export default class Cartao extends Pagamento {
    private static id = 0
    private numeroCartao: string

    constructor(){
    super()
        this.numeroCartao = Cartao.gerarNumeroCartao()
    }

    public pagar(valor:number ){
        if (this.saldo - valor >=0)
            this.saldo  -=valor
     

    }
    private static gerarNumeroCartao(): string {
        Cartao.id++
        let numeros = ""
        if (Cartao.id < 10)
            numeros = ` 000${Cartao.id}`
        else if (Cartao.id < 100)
            numeros = ` 00${Cartao.id}`
        else if (Cartao.id < 1000)
            numeros = ` 0${Cartao.id}`
        else
            numeros = Cartao.id + ""
        return ` ${numeros} ${numeros} ${numeros} ${numeros}`
    }
}