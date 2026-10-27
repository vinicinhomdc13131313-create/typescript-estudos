import Cartao from "./Cartao";
import Dinheiro from "../Dinheiro";
import Pix from "./Pix";
import Pagamento from "./Pagamento";
const pix = new Pix("100.200.30-99")
const cartao = new Cartao()
const dinheiro = new Dinheiro()

pix.depositar(1000)
cartao.depositar(1000)
dinheiro.depositar(1000)

pix.definirChaveEnvio("100.100.100-10")
pix.pagar(100)

cartao.pagar(200)

dinheiro.pagar(300)

function realizarPagamento (metodo:Pagamento , valor: number){
    metodo.pagar(valor)
}
realizarPagamento (pix,100)
realizarPagamento(cartao,200)
realizarPagamento(dinheiro,300)

console.log(pix)
console.log(cartao,200)
console.log(dinheiro,300)