export default class ContaBancaria {
    static id = 0

    private id: number
    private nome: string
    private cpf: string
    private email: string
    private numeroCartao: string

    constructor(nome: string, cpf: string, email: string) {

        this.id = ContaBancaria.id
        ContaBancaria.id++
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.numeroCartao = ContaBancaria.gerarNumeroCartao()
    }

    public setEmail(email: string) {
        if (/^[a-z0-9]+\@[a-z0-9]+\.[[a-z]{2,}|[a-z]{2,}\.[a-z]{2}]$/.test(email))
            this.email = email
        return this
    }

    public setCPF(cpf: string) {
        if (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf))
            this.cpf = cpf
        return this
    }

    public setNumeroCartao() {
        ContaBancaria.id++
        this.numeroCartao = ContaBancaria.gerarNumeroCartao()
        return this
    }

    public setId(id: number) {
        if (id < 100 && id > 0)
            this.id = id
        return this
    }

    public getNumeroCartao() {
        return this.numeroCartao
    }

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public getCPF() {
        return this.cpf
    }

    public getEmail() {
        return this.email
    }

    private static gerarNumeroCartao(): string {
        let numeros = ""
        if (ContaBancaria.id < 10)
            numeros = ` 000${ContaBancaria.id}`
        else if (ContaBancaria.id < 100)
            numeros = ` 00${ContaBancaria.id}`
        else if (ContaBancaria.id < 1000)
            numeros = ` 0${ContaBancaria.id}`
        else
            numeros = ContaBancaria.id + ""
        return ` ${numeros} ${numeros} ${numeros} ${numeros}`
    }
}