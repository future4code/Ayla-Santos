import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaImagem from './img/perfil.png'




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={
          MinhaImagem
          }
          nome="Ayla" 
          descricao="Oi, eu sou Ayla silva , trabalho com vendas em uma loja de eletrônicos 
          e também sou representante da empresa de cosméticos Eudora e a boticario , 
          tenho facilidade em lidar com o público .Estou cursando programação na Labenu aonde esta 
          sendo muito desafiador ser desenvolverdora de front-end , estou desenvolvendo habilidades em CSS,
          HTML,JAVASCRIPT,REACT
          "

        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
     
      {/* <div className="page-section-container">
        <h2></h2>
        <CardPequeno
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="E-mail" 
          descricao="aylasilva1524@outlook.com" 
        />
        
        <CardPequeno 
          image="https://www.pngwing.com/pt/free-png-moibr"
          nome="Endereço" 
          descricao="Rua Juraci Novato Jequié-Ba" 
        />
      </div> */}

  
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
        imagem=""
          texto="E-mail" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
