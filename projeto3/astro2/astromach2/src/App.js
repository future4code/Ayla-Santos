import React, {useState,useEffect} from "react";
import axios from "axios"
import Home from "./Pages/Home";
import  Matches from "./Pages/Matches";
import { BASE_URL } from "./Constants/baseUrl";


const App=()=>{
  const [pageName, setPageName]= useState("Home")
  

const irPaginaHome =()=>{
  setPageName({telaAtual:"Home"})
}

const irPaginaMatches =()=>{
  setPageName({telaAtual:"Matches"})
}
 const changePage =()=>{
   if (pageName === "Home"){
     setPageName("Matches")
   }else {
     setPageName("Home")
   }
 }

  const getPagina =()=>{
    switch (pageName){
      case "Home":
        return <Home/>
       case "Matches":
         return <Matches/>
      default:
        return <Home/>
    }
  };
 
  const clearMatches = () => {
    const URL = `${BASE_URL}/clear`

    axios.put(URL)
      .then(() => {
        alert("limpeza feita")
        setPageName("home")
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    
      <div>
      {getPagina()}
      <button onClick={changePage}>{pageName === "home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button onClick={clearMatches}>Limpar Matches</button>
    </div>
   
    
  )

}




export default App ;