// Exercício de interpretação de texto 

// Numero 1 letra A ) O que vai ser impresso no console?
//  Respostas 
// Será impresso no console o primeiro nome do elenco ,  
// todo o tamanho do elenco e o terceiro local da lista de transmissão 

// Número 2 letra A O que vai ser impresso no console

// Resposta 
//  Será impresso no console o nome do gato , cachorro e tartaruga 
//  sendo que o nome do gato será substituido pelas vogais a e o .

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Resposta 

// Ela é importante na hora de fazer o espalhamento do objeto , uma copia inteira de um objeto para o outro 

// Número 3 letra A  O que vai ser impresso no console?

// Resposta 



// Exercício escrita de código 

// NÚMERO 1
const pessoa = {
    nome: "Michel", 
    apelidos : [ "Chel" , "Mi" , "El"],
}

const informacaoDeMichel = (`Eu sou ${pessoa.nome} , mas pode me chamar de ${pessoa.apelidos}`)

console.log(informacaoDeMichel)



// NÚMERO 2 

//  A) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão
    
const pessoas ={
    pessoa1 :{
        nome: "yara",
        idade : 60,
        profissão: "vendedora", 
    },
    pessoa2 :{
        nome:"ielida",
        idade : 25,
        profissão: "tecnicaDeEnfermagem",
    },

      
}    
          function retornandoPessoas (pessoa1, pessoa2){
              console.log ["pessoa1.nome" ,pessoa1.nome.lenght , "pessoa1.idade" , "pessoa1.profissão" , pessoa1.profissão.lenght]
              console.log ["pessoa2.nome" , pessoa2.nome.lenght, "pessoa2.idade" ,"pessoa2.profissão" , pessoa2.profissão.lenght]

          }
        

// Numero 3

  let carrinho = []
      const fruta1={

          nome : "melao", 
          disponibilidade: "true",
      }

      const fruta2 ={
          nome:"abacate",
          disponibilidade: "true",
      }
    
       const fruta3 ={
           nome: "uva",
           disponibilidade: "true",
       }


       function imprimirCarrinho ( ){

           carrinho.push (fruta1)
           carrinho.push (fruta2)
           carrinho.push (fruta3)

               console.log (carrinho)
           }
          

       imprimirCarrinho ()


// Desafio 
// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e 
// depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, 
// imprima também o tipo dele para garantir que é um objeto.

function informacoesDoUsuario (){
    const nome = prompt ("Qual é o seu nome?")
    const idade = Number (prompt ("Qual a sua idade?"))
    const profissão = prompt ("Qual a sua profissão")
}

 const informacoes ={
       usuario :{
           nome: "Ayla",
           idade: 26,
           profissão: "vendedora", 

       }
       
 }
   console.log (informacoes)



//    Crie uma função que receba dois objetos que representam filmes. 
//    Eles devem ter as propriedades: ano de lançamento e nome.
//     A função deve retornar uma mensagem no seguinte modelo: