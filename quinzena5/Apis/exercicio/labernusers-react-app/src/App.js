import React from './react';
import axios from 'axios'
import './App.css';
import  './Formulario'
import './Listas'


const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers={
  headers:{
    Authorization: "Ayla-silva-banu"
  }
}
 export default class app extends React.components{
   state={
     nomeDoUsuario: "",
     emailDoUsuario: ""
   }
 }

    componentDidMount(
      this.criarUsuario
    )

    criarUsuario =()=>{
      axios
      .get(url,headers)
      .then((res)=>{
        this.setState({usuario:res.data.result.lista})
      }
      )
      .catch((err)=>
      { console.log((err))});
      
    }

    onChangeNome= (event)=>{
      this.setState({nome:event.target.value})
    }
    
    onChangeEmail =(event)=>{
      this.setState({emai:event.target.value})
    }
    onClick= (event)=>{
      this.setState({criarUsuario: event.target.value})
    
    }
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
