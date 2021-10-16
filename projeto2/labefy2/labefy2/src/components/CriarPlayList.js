import React from "react";
import axios from "axios"


class CriarPlayList  extends React.Component{
   state={
       nome:"",
       paginaDetalhe:false
   }
   handCriar=(e)=>{
       this.setState({nome:e.target.value})
   }

   fazerPlay = () =>{
      const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
      const body = {
        name:this.state.nome,
        email:this.state.nome
      }

      axios.post(url,body,{
            headers: {
              authorization: "Ayla-santos-banu"
            }


      })
      .then((res) =>{
        alert ("PlayList criada com sucesso!")
        this.setState({nome:"",})
      })
      .catch((err) =>{
        alert(err.response.data.message)
      
      })
      //  console.log(this.state)
   }

    render(){
      return(
        <div>

           <button onClick={this.props.irParaLista}>Criar</button>

            <h2>CriarPlayList</h2>
            <input placeholder={"Criar"}
             value={this.state.nome}
             onChange={this.handCriar}
           />
            <button onClick={this.fazerPlay}>Cadastrar</button>
          
        </div>
  
      )
    }
  }

  export default CriarPlayList;