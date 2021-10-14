// Exercício de escrita 

// numero1 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomesDosPets= pets.map((pets, indice, array) =>{
//   return pets.nome
//  })

//  console.log(nomesDosPets)


// const racaDosPets = pets.filter((pets , indice, array) => {
//     return pets.raca === "Salsicha"
// })

// console.log(racaDosPets)

// const petsPoodle= pets.filter((pets, indice,array) =>{
//     return pets.raca === "Poodle"
// })

// const callback =(pets,indice,array) =>{
//     if(petsPoodle.raca === "Poodle"){
//         console.log (`Você ganhou desconto para tosar o/a ${nome.petsPoodle}`)
//     }
// }

// console.log(petsPoodle)

// Numero 2 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//  const nomeDosProdutos= produtos.map((produtos, indice, array) =>{
//      return produtos.nome
//  })

//  console.log(nomeDosProdutos)


// const produtosBebidas = produtos.filter((produtos, indice, array) =>{
//     return produtos.categoria === "Bebidas"
// })

// console.log(produtosBebidas)

// const nomesDoYpe = produtos.filter((produtos, indice,array)=>{
//    return produtos.nome.includes("Ypê")
   
// })

// console.log(nomesDoYpe)