class Usuario {
    id:number
    email:string
    senha:string


    constructor (id: number, email: string , senha: string) {

        this.id = id
        this.email = email
        this.senha = senha
        console.log(this)


    }

    logar () {
      
   console.log(`Logando como ${this.email}`)
    }
}

const user1:Usuario = new Usuario(1,"example@gmail.com", "123")

const user2:Usuario = new Usuario (2, "fafadf", "fsdfdsfsd")

user1.logar()
user2.logar()

