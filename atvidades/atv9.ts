/*
Valores opcionais
São valores que não são obrigatóriamente necessários, eles
podem estar em tipos de objetos, funções e classes

em tipos:
type Pessoa = {
    cpf: string,
    nome: string,
    idade: number,
    cnpj?: string
}

em funções:
function organizar(lista:any[], fun?:(l:any[]) => any[]) {}
*/

type User = {
    id: number,
    email: string,
    senha: string,
    ccn?: string //numero de cartão de crédito
}

type SortFun = (l: number[]) => void

export function fill(lista: number[], amount: number, max?: number) {
    let multiplier = 10
    if (max)
        multiplier = max

    for (let i = 0; i < amount; i++) {
        const num = Math.ceil(Math.random() * multiplier)
        lista.push(num)
    }
}

function organizar(lista: number[], fun?: SortFun) {

    if (!fun) {
        for (let i = 1; i < lista.length; i++) {
            for (let j = 0; j < lista.length - i; j++) {
                const temp = lista[j+1]

                if (lista[j] > lista[j+1]) {
                    lista[j+1] = lista[j]
                    lista[j] = temp
                }
            }
        }
    } else
        fun(lista)
}

const l: number[] = []
fill(l, 100, 100)

organizar(l)
console.log(l)