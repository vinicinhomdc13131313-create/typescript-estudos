import {fill} from "../atvidades/atv9";

/*
Utilize a função fill e preencha uma lista com 100 valores,sendo o máximo valor possível 500.
Depois dessa lista ser preenchida, procure dentro da lista o maior número,e menor número,
e a média aritmética de todos os valores.
mostre esses valores no terminal
*/

const lista: number[] = [] 
fill(lista, 100, 500);

let max: number | undefined = undefined
let min: number | undefined = undefined
let media: number= 0

for (let i = 0; i < lista.length; i++ ){
    const v = lista [i]
    
    if (!max){
        max = v
    }else if (v>max){
        max=v
    }
    if (!min){
        min=v
    }else if (v<min){
        min = v
    }
media += v
}

console.log(`Menor: ${min}`)
console.log(`Maior: ${max}`)
console.log(`Média: ${media/100}`)
console.log(lista)