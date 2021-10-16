import React from "react"
import Styled from "styled-components"
import Axios from "axios"

export default class DetalharPlaylist extends React.Component{
     state={
         nome: "",
         artist:"",
         url : "",
     }

     postTracks =(id) =>{
         const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
         const body= {
             nome: this.state.nome,
             artist:this.state.artist,
             url: this.state.url,
         },
         axios
         post(url,body,{
            headers: {
              authorization: "Ayla-santos-banu"
            }
         
     })
      .then((resposta) =>{
          alert("Musica adcionada")
          console.log(resposta)
          this.setState({nome:"" , artist:"" , url:""})
      })
        .catch((error) =>{
            alert (error.response.data.message);
            console.log(error.response.data);
        });
    }

    onChangeImputNome =(e)=>{
        this.setState ({nome: e.target.value})  
    }
    
    onChangeImputArtist =(e) =>{
        this.setState ({nome: e.target.value})  
    }
    
    onchangeImputUrl = (e) =>{
        this.setState ({nome: e.target.value})  
    }

    render(){
        return (
          <div>
              <imput
              placeholder = "Nome da música"
              value={this.state.nome}
              onChange={this.onChangeImputNome}
              />
               <imput
              placeholder = "Artista"
              value={this.state.artist}
              onChange={this.onChangeImputArtist}
              />
               <imput
              placeholder = "Url da música"
              value={this.state.url}
              onChange={this.onChangeImputUrl}
              />
              <button onClick = {this.postTrack}>Adicionar música</button>
              <button onClick = {this.props.voltarPagina}> Ver Playlists</button>
              
          </div>  
        )
    }

}