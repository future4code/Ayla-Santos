// EXERCÍCIO 01
function inverteArray(array) {
  let inverteArray= []
  for (let i = array.length-1; i >= 0 ; i--){
    inverteArray.push(array[i])

  }
   return inverteArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados = []
  for (let i = 0 ;  i < array.length ; i++){
    if (array[i] % 2 === 0){
      numerosParesElevados.push(array [i] ** 2)
    }
  
  }
  return numerosParesElevados 
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
   let arrayDeNumerosPares = []
   for (let i = 0 ;  i<= array.length; i++ ){
     if (array[i] % 2 === 0) {
       arrayDeNumerosPares.push (array[i])
     }
   }
   return arrayDeNumerosPares
   }
   
// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let arrayDeNumerosMaiores = []
  for (let i = 0 ; i < array.length ; i++){
    if (array[i] > arrayDeNumerosMaiores ){
      arrayDeNumerosMaiores = array[i]
    }
  }
  return arrayDeNumerosMaiores 
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
  
  }
  

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
     const respostas = [false, false , true , true , true ]

     return respostas 
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let retornarNNumeros = []
  for (let i = 0; retornarNNumeros.length < n; i++) {
    if (i % 2 === 0) {
       retornarNNumeros.push(i)
    }

  }
    return retornarNNumeros
}
 
// // EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if ( a !== b && b !==c){
    return "Escaleno"
  } else if (a === b && b === c ){
   return "Equilátero"
  }else {
    return "Isósceles"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  

    }
    
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
// }

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let retornandoMaiorEMenor = []

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
   nome: 'O Diabo Veste Prada';
   ano: 2006 ; 
   diretor:'David Frankel';
   atores: 'Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci'
 
}
  console.log (`filme favorito é o ${nome} do ano de ${ano} dirigido por ${diretor} com elenco de atores ${atores}`)
  
// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
