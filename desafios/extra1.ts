/*Crie uma função chamada contador, ela deve receber 1 parâmetro:
texto-string

a função deve pegar esse parâmetro texto e dividir ele uma lista
de palavras ,então ele deverá retorna rum objeto com as seguintes propriedades:
palavras: number
listaPalavras: string[]
listaTamanhos:number[]

palavras deve ser a quantidade de palavras que o texto possui.
listaPalavras deve ser uma lista de todas as palavras do texto.
listaTamanhos deve ser uma lista dos tamanhos de cada palavra do texto.

*/
type PalavrasObj ={
    palavras:number
    listaPalavras:string[]
    listaTamanhos:number[]
}

function contador(texto:string): PalavrasObj{
    const lp= texto.split(" ")
    const qntd = lp.length
    let lt:number[]=[]

    for(let i = 0; i< lp.length;i++){
        lt.push(lp[i].length)
    }
     return{
        palavras:qntd,
        listaPalavras:lp,
        listaTamanhos:lt
    }
    console.log(contador("Lorem ipsum dolor sit amet"))
}

