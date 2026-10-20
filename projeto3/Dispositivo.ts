export default class Dispositivo{
    //@property estado - se refere ao estado de desligado e ligado de um dispositivo
    estado: boolean = false

    constructor(){
        
    }
    onOff(){
        this.estado = !this.estado

    }

    verificarEstado(){
        if(this.estado)
            console.log("ligado")
        else
            console.log("desligado")
    }

}