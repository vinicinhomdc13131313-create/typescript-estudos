import {fill} from "../atvidades/atv9";

/*Crie uma lista e preencha ela com a função fill, coloque 100 numeros,sendo o maior possivel o número 100.
faça um algoritimo que passe por cada um dos itens da lista e procure por um número alvo,caso encontre
, esse algoritmo deve retornar o indíce desse valor, caso contrário retorne -1  

*/

const lista: number[]= []
fill(lista, 100, 100);

let min: number | undefined = undefined
let max: number | undefined = undefined


for (let i = 0; i < lista.length; i++){
    const listaindice = lista [i]

    if (min === 5)
        console.log(min)
    else 
        console.log(-1)

}

console.log(`5: ${min}`)
