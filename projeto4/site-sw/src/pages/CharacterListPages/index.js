import React, { useState, useEffect } from "react";
import axios from "axios";
import {CharacterCard , H1Card , Container , Title}  from "./styled"
import {getCharacterList} from '../../service/request'


const CharacterListPages = (props) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacterList(setCharacterList);
  }, []);
  
  function personList () {
    return characterList.map((character,index) => {
      return < CharacterCard onClick={()=> props.goToDetailsPage(character.url)} 
        key={index}>
        {character.name}
        </CharacterCard>
  })

  }

  return (
    <Container>
      <Title> Star Wars</Title>
      <H1Card>Lista de Personagens </H1Card>
    {personList()}
    </Container>
  )


};

export default CharacterListPages;
