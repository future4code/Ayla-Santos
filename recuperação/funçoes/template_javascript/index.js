// Exercicio de pratica 

// Numero 1 
// Letra A 

// function imprimirMensagem (){

//     const nome ="Ayla"
//     const idade= "26"
//     const cidade="jequié"
//     const profissão = "estudante da Labenu"

//     console.log ("Eu sou Ayla,eu tenho 26 anos, moro em Jequié e sou estudante da labenu")

// }

// imprimirMensagem()

//  letra B 

// function imprimirOutra (nnome,idade,cidade,profissão){
//     const nome2 ="Ayla"
//     const idade2= 26
//     const cidade2="jequié"
//     const profissão2 = "estudante da Labenu"

//    console.log (`Eu sou ${nome2},eu tenho ${idade2},moro em ${cidade2} e sou ${profissão2}`)
// }

// imprimirOutra(console.log)


// Numero2 
// letra A 
//  function imprimirSoma(num1,num2){
//      console.log ("Este é o resultado da operação")
//    return num1+num2
       
//  }  

//  imprimirSoma()

// letra B 
// function imprimirNumero(){
//     const primeiroValor= 10
//     const segundoValor= 5 
//     const resultado = primeiroValor >= segundoValor
      
//     console.log(resultado)
//     return resultado 

// }  

// imprimirNumero()


// letra C 
// function imprimirNumerosPares (){
//     const numeroPar = 2



// }


// letra D 
//  function imprimirStrings(Olá,mundo){
//      const mensagem="Olá mundo"

//      console.log(mensagem.length)
//      console.log (mensagem.toUpperCase())
//  }
//  imprimirStrings()


//  Numero3 

const primeiroNumero = prompt ("Digite um numero")
const segundoNumero= prompt ("digite mais um numero")

function imprimirSoma(primeiroNumero,segundoNumero){
    const soma = primeiroNumero + segundoNumero 
    console.log (soma)
   return primeiroNumero + segundoNumero
}  

imprimirSoma(primeiroNumero,segundoNumero)
 
 function imprimirSubtração(primeiroNumero,segundoNumero){
     const subtração = primeiroNumero - segundoNumero 
     console.log (subtração)
    return primeiroNumero - segundoNumero
}  

imprimirSubtração(primeiroNumero,segundoNumero)

function imprimirMultiplicação(primeiroNumero,segundoNumero){
    const multiplicação = primeiroNumero * segundoNumero 
    console.log (multiplicação)
   return primeiroNumero * segundoNumero
}  

imprimirMultiplicação (primeiroNumero,segundoNumero)


function imprimirDivisão(primeiroNumero,segundoNumero){
    const divisão = primeiroNumero / segundoNumero 
    console.log (divisão)
   return primeiroNumero / segundoNumero
}  

imprimirDivisão(primeiroNumero,segundoNumero)


function imprimirResto(primeiroNumero,segundoNumero){
    const resto = primeiroNumero % segundoNumero 
    console.log (resto)
   return primeiroNumero % segundoNumero
}  

imprimirResto(primeiroNumero,segundoNumero)
