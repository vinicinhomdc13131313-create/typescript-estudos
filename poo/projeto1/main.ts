import Usuario from "./Usuario"

//new Usuario() acessa o construtor da classe Usuario

const user1 = new Usuario(7, "example@example.com", "example123", true)
const user2 = new Usuario(8, "awaexample.com", "123", false)
const user3 = new Usuario(9, "a@example.com", "333", false)

user1.mostrar()
user2.mostrar()

if (user1.logar("example@example.com", "123"))
    console.log("usuario logado.")

else
    console.log("credenciais incorretas")

user2.adicionarAmigo(user1)
user2.adicionarAmigo(user3)

user2.mostrar()
