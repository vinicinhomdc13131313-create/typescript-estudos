export default abstract class Pagamento {
protected saldo: number = 0

constructor(){

}

public depositar (valor: number){
    this.saldo +=valor
}

public abstract pagar(valor : number): void

}