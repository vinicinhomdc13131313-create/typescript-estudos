import {fill} from "../atvidades/atv9";
/*
Callback functions
-São funções onde pedem com um parâmetro uma outra função para fazer
 alguma operação

 as callback function mais comuns são as funções de uma lista:
 -lista.map() - cria uma nova lista utilizando os valores da lista anterior
-lista.foreach() - executa instruções na função parâmetro para cada valor da lista.
-lista.filter() - cria uma nova lista com apenas os itens da lista original que passsam pela condiççao existente na funçao parâmetro
-lista.reduce() - reune todos os valores da lista em um unico valor final.
*/

const l = ["asdasfasf", " faosfjafsa" ,"asiygfsagf"]
const nl = l.map((v, i) => {return {index: i , valor: v}})
console.log(nl)
const nnl= nl.map((v) => v.valor.length)
console.log(nnl)

nnl.forEach((v) => {

    if (v % 2 === 0)
        console.log(`O número ${v} é par.`)
    else
        console.log (`O número ${v} é impar.`)
})

const terminamComB = l.filter((v) => {
    return v.endsWith("b")
})
console.log(terminamComB)



const numsAleatorios: number[] = []
fill(numsAleatorios, 100 , 1000)

const maior400 = numsAleatorios.filter ((v) => v >400)
console.log(maior400)


const total = maior400.reduce ((anterior, atual) => anterior + atual)
console.log(total)