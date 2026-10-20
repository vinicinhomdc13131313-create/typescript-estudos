class Device {
    state:boolean
    analog:boolean

    constructor(state:boolean, analog: boolean){
        this.state = state
        this.analog = analog
    }

    onOff(){
        this.state = !this.state
    }
    
    verificarState(){
        if (this.state)
            console.log('ligando')
        else
            console.log('Desligado')

    }
}

class Phone extends Device {
    cor:string
    marca:string
    readonly processador: string
    readonly qntdRAM: number
    
    constructor(
        state: boolean,
        analog: boolean,
        cor: string,
        marca: string,
        processador: string,
        qntdRAM: number
    ){
        super(state,analog)
        this.cor = cor
        this.marca = marca
        this.processador = processador
        this.qntdRAM = qntdRAM
    }
}

const dg = new Device(true,true)
console.log(dg)
dg.verificarState()


dg.onOff()
console.log(dg)
dg.verificarState()

const samsung = new Phone(true , true , "Umbral", "Samsung", "o melhor", 8)