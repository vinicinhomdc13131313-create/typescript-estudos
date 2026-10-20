//palavra-chave nomeClasse

/**
 * Classes podem ser consideradas tipos.
 * Objetos de classes não são tipos, eles são chamados de objetos/instâncias
 */
class Usuario {
    //propriedades
    id:number
    email:string
    senha:string

    //constructor com parâmetros
    constructor(id: number, email: string, senha: string) {
        //propriedades do objeto sendo definidas
        this.id = id
        this.email = email
        this.senha = senha
        console.log(this)
    }

    //outras funções
    logar() {
        /*
        os template string são formas de colocar texto em formato de multilinhas
        e caso você queira colocar uma variável dentro do texto basta colocá-las
        dentro de $ {variável}
        */
        console.log(`Logando como $ {this.email}`)
    }
}

//instância === objeto
const user1:Usuario = new Usuario(1, "example@gmail.com", "123")
// user1.id = 1

const user2:Usuario = new Usuario(2, "humbertohungaro@hotmail.com", "akdsjhgc")

user1.logar()
user2.logar()

//pessoa é uma referência ao objeto que está dentro dela
const pessoa = {
    id: 10,
    nome: "Mateus",
    idade: 19,
    cursa: "Ciência da Computação",
    mostrarInformações() {
        console.log(this) //this.cursa === pessoa.cursa
        //this === pessoa
    }
}
pessoa.mostrarInformações()

//
class UserPremium {
    id: number
    nome: string
    email: string
    senha: string
    ncc: string

    constructor(id: number, nome: string, email: string, senha: string, ncc: string) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
        const res = verificarNCC(ncc)
        if (!res)
            throw new Error("Formato de cartão de crédito providenciado está inválido.")
        this.ncc = ncc
    }
}

function verificarNCC(ncc:string): boolean {
    return /^[d]{4}-[d]{4}-[d]{4}-[d]{4}$/.test(ncc)
}

const up1 = new UserPremium(10, "Igor", "example@example.com", "123", "1234-1234-1234-234")

console.log(up1)