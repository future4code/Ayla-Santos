// Exercício de interpretação 
//  1 letra A  O que vai ser impresso no console?
//   Resposta :Vai ser impresso no console o resultado da multiplicação da variavel 

// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
//  O que apareceria no console?

//  Resposta: Ele apareceria a variavel que foi colocada pelo usuario 

// Exercício 2 

// a. Explique o que essa função faz e qual é sua utilidade
//  Resposta 
// Essa função pede uma string ao usuario ,coloca a string fixada pelo usuario em letras minuscula
//  e inclui a palavra cenoura ,e imprimir a finaliação do processo final 

//Letra B 
//  Resposta 
// i a saida será true 
// ii a saída será false 
// iii a saida será true
// Todas as saídas srá em booleanos 


// Exercício de escrita 

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
 
   function imprimeMinhasInformações () {
    const nome = ("Ayla")
    const idade = ("26")
    const endereço =("Jequié"); 
    const graduação = ("estudante")

    

 console.log (" Eu sou , {nome} , eu tenho {idade}, moro em {endereço},e eu sou uma {graduação}.")
    

}
 imprimeMinhasInformações ()


//   B Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as 
//  informações da pessoa em uma só mensagem com o template:

function imprimeInfor (){
  const nome2 = prompt ("qual o seu nome?")
  const idade2 = prompt ("Qual a sua idade ")
  const endereço2 = prompt ("Digite seu endereço")
  const profissão = prompt ("digite sua profissão")


    
    const inforUsuario = (`Me chamo  ${nome2}, eu tenho ${idade2}, moro em ${endereço2}, eu sou um ${profissão}`);
 console.log (inforUsuario)
}
   imprimeInfor()


// //  Numero 2 letra A
// //  a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
// //  Invoque a função e imprima no console o resultado.
  
// function imprimeSoma (primeiroNumero , segundoNumero) {
//     primeiroNumero = 4 
//     segundoNumero = 8 
//  const resultado = primeiroNumero + segundoNumero 

//  console.log (resultado)
//  return primeiroNumero + segundoNumero 
// }
// //   imprimeSoma (4,8)

// //    letra B 
// //    b) Faça uma função que recebe 2 números e retorne um booleano que informa 
// //    se o primeiro número é maior ou igual ao segundo.

function imprimirBooleanos (quartoNumero, quintoNumero) {
 

  const resolução = quartoNumero >= quintoNumero  

 console.log (resolução )
    
}

imprimirBooleanos (10,5 );


// // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function imprimirUmNumeroPar (qualquerNumero) {
const numeroParImpar = qualquerNumero % 2 ===0 
  return numeroParImpar 

  console.log (numeroParImpar) 

}
imprimirUmNumeroPar ()
 


// //  d - Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
// //  juntamente com uma versão dela em letras maiúsculas.

function imprimirString (mensagem){ 
       const frase = mensagem
       const novafrase = frase.toUpperCase ()

        console.log (novafrase)
       
}
 imprimirString ("olá,mundo")


// //  3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// //  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
// //   pelo usuário sendo o argumento. 
// //  Por fim, mostre no console o resultado das operações:

const numero1 = Number (prompt ("insira um numero"))
const numero2 = Number (prompt ("insira outro numero "))

function imprimirAdição (n1, n2) {
     console.log (n1+n2)
 
}

function imprimirSubtração (sub1 , sub2) {
    console.log (sub1 - sub2)

}
 
function imprimirMultiplicação (m1 , m2) {
    console.log (m1 * m2 )
}

function imprimirDivisão (d1, d2 ){
console.log (d1 / d2)
} 
 console.log (`numeros inserido: ${numero1} e ${numero2}`)
console.log ("adição" , imprimirAdição)
console.log ("subtração" , imprimirSubtração)
console.log ("multiplicação" , imprimirMultiplicação)
console.log  ("Divisão" , imprimirDivisão)
