import React,{useState, useEffect} from "react"
import axios from "axios"


 export const Matches =(props)=>{
    const[mostrarMatches, setMostrarMatches]=useState()
    

  useEffect(()=>{
    axios 
    .get (
       `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`
    )
    .then ((response)=>{
      setMostrarMatches(response.data.results)
    })
    . catch((err)=>{
      console.log(err)
    })

  },[])

 


    return(
       <div>
       <h2>Matches</h2>
       <span>{mostrarMatches.id} </span> 
       <img src={mostrarMatches.photo} alt={mostrarMatches.name}/>
       <span>{mostrarMatches.bio} </span> 
       <span>{mostrarMatches.age}</span>
       <button></button>
       </div>
    )
    
    
}




export default Matches;