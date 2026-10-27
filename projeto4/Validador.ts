export default class Validador {

    public static validarEmail(email: string): boolean {
        return /^[a-z0-9]+\@[a-z0-9]+\.[[a-z]{2,}|[a-z]{2,}\.[a-z]{2}]$/.test(email)
    }

    public static validarCPF(cpf: string): boolean {
        return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)
    }

    public static validarNumeroCartao(numeroCartao: string): boolean {
        return /^\d{4}\ \d{4}\ \d{4}\ \d{4}$/.test(numeroCartao)
    }

    public static validarSenha(senha: string): boolean {
        return /^.{8,}$/.test(senha)
    }
}