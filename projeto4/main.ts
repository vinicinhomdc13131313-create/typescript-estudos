import ContaBancaria from "./ContaBancaria";

const cb1 = new ContaBancaria("Rambo", "100.200.300-55", "rambo@example.com")
const cb2 = new ContaBancaria("Marco", "999.900.009-99", "marco@example.com")
const cb3 = new ContaBancaria("joaquim","888.888.999-16","joaquim@example.com")
const log = console.log
log(cb1)
log(cb2)
log(cb3)

cb1.setCPF("111.222.333-44").setEmail("example@example.com")
log(cb1)
