// // Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// // Exercícios

// // Exercício 1

  function calculaAreaDoRetangulo() {

//   // escreva seu código aqui
const altura = (Number (prompt = ("Digite a altura do retangulo. "))) ; 
const largura = (Number (prompt = ("Digite a largura do retangulo.")));

const areaRetangulo = ("altura * largura ") ;

  console.log ("areaRetangulo")
}


// // // Exercício 2
function imprimeIdade () {
   
//   // escreva seu código aqui 

const anoAtual = Number(prompt ("insira o ano atual ")) ;
const anoNascimento = Number(prompt ("insira o ano do seu nascimento ")) ;
const imprimeIdade = (anoAtual - AnoDeNascimento) ;

console.log (imprimeIdade )
}


// // // Exercício 3
function calculaIMC() {

// //   // escreva seu código aqui
let peso =  ("insira o seu peso"); 
let altura = ("insira a sua altura") ;
let calculaImc= ('peso / altura * altura ') ; 
 
 console.log (calculaImc) ; 
}

// // // Exercício 4
function imprimeInformacoesUsuario() {

//   // escreva seu código aqui
const nome = ("nome")
const idade = ("idade")
const email = ("email")

const nome= prompt ("Qual o seu nome ? ")
const idade = prompt = ("Qual a sua idade? ")
const email = prompt ("qual o seu email?")

console.log ("Meu nome é " + nome +" , tenho " + idade + "anos " , "e o meu email é" + email + ".")
}

// // // Exercício 5
function imprimeTresCoresFavoritas() {

//   // escreva seu código aqui


const cor1 = prompt ("cor favorita 1 ")
const cor2 = prompt ("cor favorita 2 ")
const cor3=  prompt ("cor favorita 3")


  coresFavorita [0] = prompt ("Qual sua primeira cor favorita ?")
  coresFavorita[1] = prompt ("Qual a segunda cor favorita ?")
  coresFavorita [2] = prompt ("Qual a terceira cor favorita ?")

  console.log ( coresFavorita)
}

// // Exercício 6
function retornaStringEmMaiuscula() {

 //  // escreva seu código aqui
 
 const string  = ("texto")
 const stringMaiuscula = string .toUpperCase ();  

console.log ("stringMaiuscula")

}

// // Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const valorEspetaculo = prompt ("Qual o valor do espetaculo ?")
  const valorIngresso = prompt ("Qual o valor do ingresso? ")

  const resultado = Number (valorEspetaculo * valorIngresso)

  console.log (resultado )
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = ("texto")
  const string2 = ("texto")

  console.log (string1. lenght )
  console.log (string2. lenght )
  
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  
 // // escreva seu código aqui
  const string1 = ("texto")
  const string2 = ("texto")

  const string1Minuscula = string1 . toLowerCase ()
  const string2Minuscula = string2. toLowerCase ()

  console. log ("A string1 é igual a string2 ?" , string1 === string2 )
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoPresente =(Number(prompt = ("Digite o ano atual")))
  const anoDeNascimento =(Number (prompt ("Digite o ano do seu nascimento")))
  const carteiraDeIdentidade = (Number(prompt ("Digite o ano de emissão da sua carteira de identidade ")))

 const idadeAtual  = Number (anoAtual) - Number (anoDeNascimento)
 const emissao = Number (anoAtual) - Number (carteiraDeIdentidade)
  
 const renovacao20 = Number( prompt("Para pessoas de 20 anos" , idade <= 20 && tempoDeEmissao >= 5 ))
 const renovacao20A50 = Number(prompt (" Para pessoas de 20 a 50 anos" , idade > 20 && idade <= 50 && tempoDeEmissao >= 10))
 const renovacao50 = Number (prompt ("Para pessoas de 50 anos " , idade > 50 && tempoDeEmssao >= 15 ))

 const renovação = renovacao20 || renovacao20A50 || renovacao50 

console.log (renovacao)
}


// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number (prompt ("Digite o ano atual"))

  const divisivel4 = ano % 4 ==0 
const divisivel100 = ano % 4 != 0 
const divisivel400 = ano == 0 

console.log (divisivel4 || divisive100 || divisivel400)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const validadeIdade = prompt ("Você tem mais de 18 anos ?")
  const validadeEnsinoMedio = prompt ("Você tem ensino médio completo ?")
  const validadeDisponibilidade = prompt ("Você possui a disponibilidade exclusiva durante os horarios de curso ? ")

  const validadeInscricaoLabenu = validadeIdade && validadeEnsinoMedio && validadeDisponibilidade 
  console.log (validadeInscricaoLabenu)

}