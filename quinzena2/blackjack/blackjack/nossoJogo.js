/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   //  Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack

 
    console.log ("Bem vindo(a) ao jogo de Blackjack!")

let cartaUsuario1 = comprarCarta ();
let cartaUsuario2 = comprarCarta ();
let cartaComputador1 = comprarCarta ()
let cartaComputador2 = comprarCarta ();

 
let usuario = cartaUsuario1.valor + cartaUsuario2.valor 
let computador = cartaComputador1.valor + cartaComputador2.valor 

 let respostaDoUsuario = confirm ("Quer jogar outra rodada?")

while (respostaDoUsuario === true) {

   if (usuario === computador){

   console.log (`usuario - cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${usuario}`);
   console.log (`computador - cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${computador} `);
   console.log ("Empate")
     break

   } else if (usuario > computador){
      console.log (`usuario - cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${usuario}`)
      console.log (`computador - cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${computador}`)
      console.log ("o jogador ganhou")

       break 

   } else if (usuario < computador ){
     console.log (`usuario - cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${usuario}`)
     console.log (`computador - cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${computador}`)
     console.log ("o computador ganhou ")
   }
   
   break
}

while (respostaDoUsuario === false ){
   console.log ("O jogo acabou")

   break
} 