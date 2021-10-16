import React from "react"
import axios from "axios"
import styled from "styled-components"

 const CardUsuario = styled.div`
   border: 1px solid black;
   padding: 10px;
   margin: 10px;
   width: 300px;
   display: flex;
   justify-content: space-between;
 `

class ListaDePlayList  extends React.Component{
    state ={
      usuarios:[],
      paginaDetalhe:false
    
      
    }

     componentDidMount () {
       this.pegarUsuario()
     }



    pegarUsuario = () =>{
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

       axios.get(url,{
          headers:{
            Authorization: "Ayla-santos-banu"
          }

       })
       .then ((res) =>{
         this.setState({usuarios: res.data})
       })
       .catch((err) => {
         alert ("Ocorreu um problema, tente novamente!")
       })
    }

    deletarUsuario = (id) =>{

      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
      axios.delete(url,{
         headers:{
           Authorization: "Ayla-santos-banu"
         }

      })
      .then((res) =>{
        alert ("Usuario deletado com sucesso")
      })
      .catch((err) =>{
      alert ("Ocorreu um erro tente novamente")
      })
    }

    trocarPagina=()=>{
      this.setState({paginaDetalhe:true})
    }

    voltarPagina=() =>{
      this.setState({paginaDetalhe:false})

    }
    render(){
      if (this.state.paginaDetalhe){
        return <Mostrar voltarPagina = {this.voltarPagina} />
      }
      const listaUsuarios = this.state.usuarios.map((user)=>{
            return (
            <CardUsuario key={user.id}>
              {user.name}
              <button onClick={() => this.deletarUsuario(user.id)}> Deletar</button>
              <button onClick ={()=> this.trocarPagina}>Mostrar</button>
            </CardUsuario>)

      })
      return(
        <div>
             <button onClick={this.props.irParaCriar}>Ir na Lista</button>
          <h2>Lista</h2>
          
        </div>
  
      )
    }
  }

  export default ListaDePlayList;