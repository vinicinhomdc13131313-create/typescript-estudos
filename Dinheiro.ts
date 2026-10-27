import Pagamento from "./projeto5/Pagamento";
export default class Dinheiro extends Pagamento{
    constructor(){
        super()
    }

    public pagar(valor: number){
        if (this.saldo - valor>=0)
            this.saldo -= valor
    }

}