export default class ContaBancaria {
   private dinheiro: number = 0

   constructor(private cpf: string, private email: string, senha: string, private nome: string,
      private id: number) {
   }

   public getCPF() {
      return `***.***.**${this.cpf.substring(this.cpf.length - 4)}`
   }

   public getEmail() {
      const at = this.email.split("@")
      return `${at[0].substring(0, 4)}***@${at[1]}`
   }
   public getNome() {
      return this.nome.split(" "[0])
   }

   public depositar(valor: number) {
      if (this.dinheiro - valor < 0)
         return
      this.dinheiro -= valor
      return true
   }
   public sacar(valor: number) {
      if (this.dinheiro - valor < 0)
         return false
      this.dinheiro -= valor
      return true
   }

   public transferir(other: ContaBancaria, valor: number) {
      if (this.sacar(valor)) {
         other.depositar(valor)
      }
   }
}


