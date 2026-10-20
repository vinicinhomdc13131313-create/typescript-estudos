type fun3= (texto1:string , texto2:string) => string

const soma: fun3 = (texto1:string ,texto2:string)=>{
    return texto1 + texto2
}

const res2 = soma("formula","1")
console.log(res2)

const res3 = soma("guarda-","chuva")
console.log(res3)