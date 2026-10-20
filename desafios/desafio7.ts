import {fill} from "../atvidades/atv9";

const lista: number []=[]
fill(lista, 100 , 100)


const multiplicado = lista.map ((v) =>{
    if (v % 5=== 0){
        return (v + 5)* 3
    } else {
        return v * 10
    }
})


const filtrado = multiplicado.filter((v) => v < 100)
const total = filtrado.reduce ((anterior, atual)=> anterior +atual)

console.log(lista)
console.log(multiplicado)
console.log(filtrado)
console.log(total)