import Dispositivo from "./Dispositivo";
// Herança de classe
//telefone possui todas as características e funcionalidades da classe dispositivo
export class Telefone extends Dispositivo{
numero_telefone: string
contatos: Telefone[] = []

constructor (numero_telefone:string){
    super()
    this.numero_telefone = numero_telefone
}
adicionarContato(numero_telefone: string){
    const tel = new Telefone(numero_telefone)
    this.contatos.push(tel)
}
removerContato(numero_telefone:string){
    let indice:number= - 1
    for (let i = 0; i <this.contatos.length;i++){
        if (this.contatos[i].numero_telefone === numero_telefone){
            indice = i 
        break 
    }
        }
        if (indice === -1)
            return
        this.contatos.splice(indice, 1)
    }
}
