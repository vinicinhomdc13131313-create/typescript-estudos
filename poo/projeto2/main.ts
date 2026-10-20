import ContaBancaria from "./Contabancaria"

const cb = new ContaBancaria("000.000.007-99", "example@example.com", "Àlvaro Rodrigues Souza Martins", "", 1)

const cb1 = new ContaBancaria("808.760.009-31", "osvaldocz@example.com","Osvaldo cruz de brito","ffposdf",2)
/*console.log(cb.getCPF())
console.log(cb.getEmail())
console.log(cb.getNome())
let tempDin = cb.getDinheiro()
tempDin = 1_000_000_000_000_000
console.log(cb)*/

cb.depositar (1000)
cb1.depositar (20000)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())

cb1.transferir(cb, 400)