 // Exercicio de escrita 
//   1 letra a Explique o que o código faz. Qual o teste que ele realiza? 
//  Resposta : O código pede para o usuário digitar um número, e depois ele quer saber se esse número é divisivel por 2
//  Se for ele vai receber uma mensagem "passou no teste", se não for a mensagme será "não vai passar no teste"

//  letra b Para que tipos de números ele imprime no console "Passou no teste"? 

// O número será par

//  letra c Para que tipos de números a mensagem é "Não passou no teste"? 
// Número será impar 

 // Exercício 2 
//  letra a Para que serve o código acima?
// Resposta : O código serve para fazer uma comparação 

//  letra b Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// Resposta : O preço da maçã é 2,25 

// Exercício 3 
//  letra a O que a primeira linha está fazendo?
// Resposta : está pedindo ao usuario um Número 
//  Letra B Considere um usuário digitou o número 10.
//   Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta : Se o número for 10 a mensagem será "esse número passou no teste", 
// por que ele quer um número maior que 0 
// mas se o número for -10 ele não passará no teste por que ele é menor que 0 

// Exercício de escrita do codigo 

// Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
// (apenas maiores de idade).


const idadeDoUsuario = Number ( prompt ("Digite a sua idade!"))

function analisandoIdadeDoUsuario (idadeDoUsuario) {
 if (idadeDoUsuario === 18 ){
     console.log ("Você pode dirigir ");
 } else if (idadeDoUsuario > 18){
     console.log ("Você pode dirigir")
 } else if (idadeDoUsuario < 18){
     console.log ("Você não pode dirigir")
 } else {
     console.log ("Digite a idade válida")
 }
}

analisandoIdadeDoUsuario (idadeDoUsuario)

// Exercicio 2 
// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else

const turnoEscolarDoUsuario = prompt ("Digite a primeira letra do seu turno escolar")

 function analisandoTurnoEscolar (turno){

    if(turno === "M") {
        console.log ("Bom dia !")
    }else if (turno === "V"){
        console.log ("Boa tarde")
    } else if (turno === "N"){
        console.log ("Boa noite")
    } else {
        console.log ("Escolha um opção conforme as opçoes citadas ")
    }
        
 } 
     
 analisandoTurnoEscolar (turnoEscolarDoUsuario)

// Exercício 3 

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoDoUsuario= prompt ("Digite a primeira letra do seu turno escolar")

switch (turnoDoUsuario) {
    case "M":
        console.log ("Bom dia!")
   break 
    case "V" :
        console.log ("Boa tarde!")
        break 
    case "N" :
        console.log ("Boa noite")
        break
    default:
        console.log ("Escolha uma opção ")
}

// Exercício 4
// Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e
//  se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário
//   qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//   então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("




 const generoDoFilme = prompt (`Escolha um gênero de filme ${filmes}`)
 const preçoDoIngresso = Number (prompt ("Qual o valor do ingresso?"))
     

 function analisandoFilmes (filme)

 if (filme === "fantasia") {
     console.log("bom filme")
 } else if (filme === "fantasia"){
     console.log ("escoha outro filme ")
 } else {

 }console.log ("escolha uma opção de gêneros de filme ")

analisandoFilme (filme)