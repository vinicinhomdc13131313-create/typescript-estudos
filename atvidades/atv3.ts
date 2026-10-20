
//lista é uma estrutura de dados onde consegie armazenar mais de um valor simultaneamente

const lista: any [] =[]
let lista2: string [] = []
const lista3: (string | number)[] = []
const lista4: (any)
//insere valores dentro de uma lista
lista.push(10)
lista.push("Humberto")
lista.push(["João alves"])

lista[2][0]

lista2.push("Rua dr curvelo cavalcante")
lista2.push("awawa")

//lista2.push(true) //ele reclama, porque eu declarei que a lista só pode aceitar strings

lista3.push(10)
lista3.push("Eduardo")
lista3.push("Artur")

lista4.push(lista)
lista4.push(lista2)
lista4.push(lista3)

//console.log(lista4)

//-------------------------------------
lista2.push("limpido")
lista2.push("geraldo")
lista2.push("agua")
lista2.push("agua")

console.log(lista2)

for (let i = 0; i < lista2.length; i++){
    console.log(lista2[i])
}

for (const item of lista2){
    console.log(item)
}

lista2.forEach((v, i) =>{
    console.log(i + " - " + v)
})


const newLista2 = lista2.filter(v => v.length <6)
console.log(newLista2)

//lista2.splice()
//lista2.slice()


function foreach(lista:string[], fun: (v:string, i: number) => void){
    for (let i = 0; i < lista.length; i++){
        fun (lista [i], i)
    }
}

foreach(lista2, (v, i) =>{
    console.log(i + " -- " + v)
})

