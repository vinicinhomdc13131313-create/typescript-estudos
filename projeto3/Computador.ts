import Dispositivo from "./Dispositivo";

export default class Computador extends Dispositivo{
    marca:string
    SO: string
    ram: number
    cpu: string

    constructor (marca: string , SO:string, ram:number, cpu: string){
        super()
        this.marca = marca
        this.SO = SO
        this.ram = ram
        this.cpu = cpu
    }
programar(){
    if (!this.estado){
        console.log("Não tem como programador com o computador desligado")
        return
    }
    console.log("console.log(\"Hello World!\")")
}
}

