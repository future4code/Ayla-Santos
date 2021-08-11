 // Exercício de interpretação 
//   numero 1) letra a )O que vai ser impresso no console?
// resposta: Vai ser impresso no console o nome do usuario sua localização no array e apelido de cada usuario.

//  numero 2 letra a) O que vai ser impresso no console?
// Resposta: Vai ser impresso no console um novo array só que agora retornando somente os nomes dos usuarios

//  numero3 letra a) O que vai ser impresso no console?
// resposta: será impresso no console um novo array mas agora com um apelido diferente do de chijo 

//Exercício de escrita do código 

// 1) 
// letra A 
//  const pets =[ 
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
  
 
 
// const nomeDePets = pets.map ((pets) =>{
//    return pets.nome
// })
  
// console.log (pets)
  

// const apenasPetsSalsicha = pets.filter ((pets)=>{
//    return pets.raca === "Salsicha"
// })

// console.log (apenasPetsSalsicha)


// const mensagemPromoDogsPoodle = pets.filter ((pets) =>{
//  if (pets.raca === "Poodle")
//    return pets.nome 
// })
// function imprimeMensagem (pets){
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`

// }
// const mensagem = mensagemPromoDogsPoodle.map (imprimeMensagem)

// console.log (mensagem)


// 2) 
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

//   const nomeDosProdutos = produtos.map ((item) =>{
//    return item.nome 
//   })

//   console.log (nomeDosProdutos)

//   const mensagemPromoDosProdutos = produtos.filter ((item) =>{

//       return item.nome , item.preço
//    })
//    function imprimeMensagem (produtos){
//        return `O produto ${produtos.nome}=> preço com desconto 5% : R$ ${Math.floor ((produtos.preço *95/100)*100)/100}`
   
//    }
//    const arrayProdutos= mensagemPromoDosProdutos.map (imprimeMensagem)
   
//    console.log (arrayProdutos)


//    const apenasProdutosBebidas = produtos.filter ((produtos)=>{
//    return produtos.categoria === "Bebidas"
// })

// console.log (apenasProdutosBebidas)


   const apenasProdutosYpe = produtos.filter ((produtos)=>{
})

console.log (apenasProdutosYpe. includes() )