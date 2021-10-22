import React, {useState,useEffect}from "react";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "./componentes/PokeCard";



  const App=() =>{

    const [pokeList, setPokeList]= useState([])
   const [pokeName, setPokeName]= useState("")
  
   useEffect (()=>{
     getPokemonList()
   },[])
  
  function getPokemonList(){

    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  
    .then((res)=>{
      setPokeList(res.data.results)
       
    })
      .catch ((err)=>{
       console.log(err)
      })
   
  
  }
    
  function changePokeName(event) {
    setPokeName (event.target.value);
  }


  return (
    <div className="App">
      <select onChange={changePokeName}>
      <option value={""}>Nenhum</option>
      {pokeList.map(pokemon =>{
        return (
          <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        )
      }
      )}
      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
  }
   
  export default App;



 

   

 
  

 
  
