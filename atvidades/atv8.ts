/*
Valores opcionais
São valores que não são obrigatóriamente necessários,eles
podem estar em tipos de objetos,funções e classes

em tipos:

type Pessoa = {
cpf:string
nome:string
idade:number
cnpj?
}

em funções:

function organizar (lista:any[], fun?: (l:any[]=>)){}
*/

type User = {
    id:number,
    email:string,
    senha: string,
    ccn?:string
}
type SortFun = (l:number[]) => void

function fill(lista:number[], amount: number, max?:number){
    let multiplier = 1
    if (max)
        multiplier = max
    
    for (let i = 0; i < amount; i++){
        const num= Math.ceil(Math.random()*multiplier)
        lista.push(num)
        
    }
}





function organizar(lista: number[], fun: SortFun){
    if(!fun){
    for (let i = 0; i< lista.length;i++){
    for (let j    = 0; j < lista.length - i; j++){

    }
}
}else
    fun (lista)
}
