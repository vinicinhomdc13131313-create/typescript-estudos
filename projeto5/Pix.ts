import Pagamento from "./Pagamento";
export default class Pix extends Pagamento {
    private chave: string
    private chaveEnvio: string ="" //chave de quem enviou o pix

    constructor(chave: string) {
        super()
        this.chave = chave
    }
    public pagar(valor: number,) {
        if(!this.chaveEnvio)
            return
        if (this.saldo - valor < 0)
            return
        this.saldo -= valor
        
    }
     public definirChaveEnvio (chaveEnvio: string){
        if (this.verificarChave(chaveEnvio))
            this.chaveEnvio = chaveEnvio
     }

    public verificarChave(chave: string) {
        if (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(chave))
            return true
        else
            return false
    }
}