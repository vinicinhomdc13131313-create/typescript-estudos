class Device{
    constructor(
        private state:boolean,
        private analog:boolean,
        private nome:string

    ) {
        this.nome = this.processarNome(nome)
    }
    onOff() {
        this.state = !this.state
    }

    public verificarState () {

        if (this.state)
            console.log("Ligado")
        else
            console.log("Desligado")

    }

    private processarNome(nome:string): string {
        if (!nome.startsWith("Device"))
            return "Machine" + nome
        return nome

    }

    protected acessarMac() {
        return "ff:ff:ff:ff:ff:ff"

    }    
}

const dev = new Device(true , true, "Mouse")
dev.verificarState()
console.log(dev)

const dev2 = new Device(false, false, "Device Touch")
console.log(dev2)

