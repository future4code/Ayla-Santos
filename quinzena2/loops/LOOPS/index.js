// Exercícios de escrita 
// Número -1 
// Resposta : o resultado do console será todos os números abaixo de 5 impresso no console.

//  Numero 2 letra a 
//  resposta: Será impresso no console os numeros do array maiores que 18 

// Exericio 1 

// Se a quantidade for 0, 
// imprima no console "Que pena! Você pode adotar um pet!"

let nomeDepetDoUsuario = Number (prompt("Quantos bichinhos de estimação você tem ?"))

if (nomeDePetDoUsuario === 0 ){
     console.log ("Que pena! Você não pode adotar um pet ")
} for (let i =0 ; i < nomeDePetDoUsuario ; i ++){
     let arrayNomeDePet = []
     let nomeDePetDoUsuario = prompt ("Que legal ! Digite o nome de um do seu pet")
     arrayNomeDePet = nomeDePetDoUsuario

     console.log (nomeDePetDousuario)
}


 
// Considere que você tenha acesso a um array  
// (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo,
//  realizando as operações pedidas:
  

// Escreva um programa que imprime cada um dos valores do array original.

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


  for (let arrayDeNUmeros of  arrayOriginal){
      console.log (arrayDeNumeros)
  }

// Escreva um programa que imprime cada um dos valores do 
// array original divididos por 10


for (let arrayDeNumeros of arrayOriginal  ){
  console.log (arrayDeNumeros / 10 )
}

// Escreva um programa que crie um novo array contendo, 
// somente, os números pares do array original e 
// imprime esse novo array 

function retornandoNumerosPares (arrayOriginal){
     let numeroPar= []
     for (let i = 0 ; i < arrayOriginal.lenght; i++){
          if (arrayOriginal [i] % 2 === 0 ){
               numeroPar.push (arrayOriginal[i])
          }
     } return numeroPar

}  

console.log (retornandoNumerosPares (arrayOriginal[i]))


// Escreva um programa que crie um novo array contendo strings, da seguinte forma:
//  "O elemento do índex i é: numero". Depois, imprima este novo array.
  

function novoArrayDeString (){
     let arrayDeStrings = []
     let i=0 
     for (let numeroArray of arrayOriginal ){
          arrayDeStrings.push (`O elemento do index ${i} é : ${numeroArray}`)
     }
     return arrayDeStrings
}

console.log (novoArrayDeStrings())

// Escreva um programa que imprima no console o maior e o menor números contidos no array original

