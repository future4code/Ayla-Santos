import React from react 
  

class App extends React.component{


    render(){
  return(
      <div className="App">
          <h2> Criar Usuario</h2>

          <imput>
              placeholder={Nome}
              value={this.state.nome}
              onChange={this.onChangeNome}
          </imput>
          
         <imput>
             placeholder={Email}
             value={this.state.email}
             onChange={this.onChangeEmail}
         </imput>

         <button onClick={this.criar}> Criar
         alert.criar("Usuario foi criado com sucesso")
         </button>
         
      </div>
  );

    }
}

