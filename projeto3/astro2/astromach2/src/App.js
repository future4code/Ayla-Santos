import React, {useState,useEffect} from "react";
import axios from "axios"
import "./Pages/Home";
import "./Pages/Matches";


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
      case "home":
        return <home/>
       case "matches":
         return <matches/>
      default:
        return <home/>
    }
  };


  return (
    <div>
      {getPagina()}
      <h2>Astromatch</h2>
      <button onClick={changePage}>{pageName=== "Home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button>Limpar Matches</button>
    </div>
  )

}




export default App ;