export default class Usuario {
    id: number
    email: string
    senha: string
    possuiCNPJ: boolean
    amigos: Usuario[] = []
    constructor(id: number, email: string, senha: string, possuiCNPJ: boolean) {
        this.id = id
        this.email = email
        this.senha = senha
        this.possuiCNPJ = possuiCNPJ
    }

    mostrar() {
        console.log(this)
    }
    logar(email: string, senha: string) {
        return this.email === email && this.senha === senha
    }

adicionarAmigo(user:Usuario){
    this.amigos.push(user)
    user.amigos.push(this)
}

}

const user1 = new Usuario(7, "example@example.com", "123", true)

user1.mostrar()
const res = user1.logar("example@example.com" ,"example123")
console.log(res)
