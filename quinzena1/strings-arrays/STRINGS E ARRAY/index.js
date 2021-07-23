

//Exercício 2 
//Será impresso a frase em letras maiusculas , e substituição da letra a e i , e o tamanho da  frase 26 

//Exerício de escrita código

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

   // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = ("stella ")
constEmailDoUsuario = ("stella9095@gmail.com")

console.log (`O email $ {stella9095@gmail.com}, foi cadastrado com sucesso. Seja bem vindo(a) $ {stella}`);

// Exercicio 2 

//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:

//a) Imprima na tela o array completo

const nomeCompleto = ("Ayla silva dos santos ")

console.log ("Ayla silva dos santos ");

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas:
// seguida por cada uma das comidas, uma embaixo da outra.

const comidaPreferida = ["lasanha", "pizza" , "açai", "omelete" , "hamburguer"];
 console.log (comidaPreferida)

 console.log(`Essas são as minhas comidas preferidas :
 ${[comidaPreferida [0]]}
 ${[comidaPreferida [1]]}
 ${[comidaPreferida [2]]}
 ${[comidaPreferida [3]]}
 ${[comidaPreferida [4]]}`)
 

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário.
//  Imprima na tela a nova lista

const comidaFavorita = ["lasanha" , "pizza" , "açai" , "Omelete" , "hamburguer"]; 
const usuario = prompt ("Qual a sua comida preferida ?") 
const comidaPreferida = comidaPreferida .splice (1,3,usuario) ; 
console.log (`a lista atualizada fica ${comidaFavorita}`);

// Exercicio 3 
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

 const listaDTarefas = []

 //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

 const tarefa1 = prompt ("Diga uam tarefa do seu dia.");
 const tarefa2 = prompt ("Diga outra tarefa do seu dia .");
 const tarefa3 = prompt ("Diga mais uma tarefa do seu dia .");

 listaDeTarefas.push(tarefa1,tarefa2,tarefa3);

 //c Imprima o array na tela
  console.log (listaDeTarefas );

// d Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

 const listaDeTarefas = prompt ("Quantas tarefas foram execultada?");
 console.log (listaDeTarefas);

//  Remova da lista o item de índice que o usuário escolheu.
  listaDetarefas.splice (1,1, usuario);
console.log (listaDeTarefas);

// f) Imprima o array na tela

  console.log (listaDeTarefas);

 