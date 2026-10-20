let nome:string = "eduardo"
const idade: number = 10.5
const cpf: number | string = "true"

type Status = "concluido" | "cancelado" | "em processamento" | "em envio"
type HTTPStatusCodes = 400 | 401 | 403 | 300 | 500
type AllStatus = Status | HTTPStatusCodes
type StringNumber = string | number

const statusEnvio: HTTPStatusCodes= 500

if (statusEnvio === 500) {
    console.log("é 500")

    for (let i = 0; i < 100;i++){
        console.log("iteração" + i )

    }
    while (true) {
        console.log('loop infinito')
    }
}
