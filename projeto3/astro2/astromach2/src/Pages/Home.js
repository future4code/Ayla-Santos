import React,{useState, useEffect} from "react"
import axios from "axios"
import pages from "./Matches"



 const Home = (props) =>{

     const [mostraPerfil, setMostraPerfil]= useState({})
     const [personList, setPersonList]=useState([])


     useEffect(()=>{
       getPersonList()
       getMostraPerfil ()
     },[])
     

     const getPersonList=()=>{
        axios 
        .get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`)
         

        .then((res)=>{
         setPersonList(res.data.result)
        })
        .catch((err)=>{
         console.log(err)
        })

       const personList=(id)=>{
           const url =(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`)

          const body=()=>{
            
          }

          axios 
          .post (url,body,{
              headers:{
               authorization:"Ayla-santos-banu"
              }
          } )
        }
     }

     const  getMostraPerfil=()=>{
        axios 
        .get (
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
        )
    
    .then((response)=>{
      setMostraPerfil(response.data.profile)
    })
     .catch ((err)=>{
      console.log(err)
     })
    
     }
      




return (
    <div>
    <h2>Astromach</h2>
    <span>{mostraPerfil.name} </span> 
    <img src={mostraPerfil.photo} alt={mostraPerfil.name}/>
    <span>{mostraPerfil.bio} </span> 
        <button></button>
        </div>
    )
}

export default Home;

