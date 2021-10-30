import React,{useState, useEffect} from "react"
import axios from "axios"
import {BASE_URL} from "../Constants/baseUrl"
import {
PageContainerMatches,
ContainerListaMatches,
CardImg,
Avatar,
} from "./styled"


 export const Matches =()=>{
    const[mostrarMatches, setMostrarMatches] = useState([])
    

    const getMostrarMatches = () => {
      const URL = `${BASE_URL}/matches`

      axios.get(URL)
          .then((res) => {
              setMostrarMatches(res.data.matches)
              
          })
          .catch((err) => {
              console.log(err.response)
          })
        }

  useEffect(() => {
      getMostrarMatches()
  }, [])


    return(
           <PageContainerMatches>
             <ContainerListaMatches>
                {mostrarMatches.map((m)=>{
                  return(
                    <CardImg>
                      < Avatar src={m.photo}/>
                      <h4>{m.name}</h4>
                     
                    </CardImg>
                  )
                })}
                
            </ContainerListaMatches>
           </PageContainerMatches>
          
      
       
    )
    
    
}




export default Matches;