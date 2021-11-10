import React , {useState , useEffect} from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/baseUrl' ;

const CharacterListPages = (props) => {
    
const [characterList, setCharacterList] = useState ([])

   const getCharacterList =() =>{
       const URL = `${BASE_URL}/people`

       axios.get(URL)
       .then((res)=>{
           setCharacterList(res.data.result)
       })
       .catch((err)=>{
           console.log(err)
       })
   }


   const characters = setCharacterList.map ((person)=> {
      return (

          <p> key={person.url}
              {person.name}
          </p>
          
      )
   })
   
   useEffect (()=>{
       getCharacterList()
   },[])






    return(
        <div>
            <div>{characters}</div>
            <button onClick={props.onChangeDetail}>Ir para tela de detalhes</button>
            <h1>Lista de personagen</h1>
        </div>
    )
}


export default CharacterListPages 