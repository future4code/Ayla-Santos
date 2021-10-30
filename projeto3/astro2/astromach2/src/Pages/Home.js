import React,{useState, useEffect} from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/baseUrl";
import{
PageContainer,
PersonContainer,
PersonImage,
PersonName,
PersonBio,
ChooseButton,
}from "./styled"




 const Home = () =>{
    const [mostraPerfil, setMostraPerfil]=useState([])

const getMostraPerfil = () =>{
    const URL = `${BASE_URL}/person`

    axios.get(URL )
        .then((res) => {
            setMostraPerfil(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
    
        })
        
}
useEffect(() => {
    document.title="Astromatch"
   getMostraPerfil()
}, [])

     const personLike=(boolean)=>{
        const URL = `${BASE_URL}/choose-person`
        const body = {

            id:(mostraPerfil.id),
            choice:(boolean) 
        }
        axios.post(URL, body)
            .then((res) => {
               getMostraPerfil()
            })
            .catch((err) => {
                console.log(err.response)
            })
     }
    


   return (
          <PageContainer>
              <PersonContainer>
                <PersonImage src={mostraPerfil.photo} />
                <PersonName>{mostraPerfil.name}, {mostraPerfil.age}</PersonName>
                <PersonBio>{mostraPerfil.bio}</PersonBio>
                <div>
                <ChooseButton onClick={()=> personLike (false)}>❌</ChooseButton>
                <ChooseButton onClick={()=> personLike (true)}>💚</ChooseButton>
        
                </div>
            </PersonContainer>
            
           
       
          </PageContainer>
         
       
   )   
 }

 export default Home;
