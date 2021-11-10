
import CharacterDetailPages from './pages/CharacterDetailPages';
import CharacterListPages from './pages/CharacterListPages';
import React , {useState} from 'react';



const App = () =>  {
  const [currentPage, setCurrentPage] = useState ("list")


const selectPage = () => {
    switch(currentPage){
      case "list":
        return <CharacterListPages  onChangeDetail={onChangeDetail}/>
      case "detail":
        return <CharacterDetailPages onChangePage={onChangePage}/>
      default :
      return <CharacterListPages/>
      
    }
};
  
const onChangePage = () => {
  setCurrentPage("list")
}

const onChangeDetail = () => {
  setCurrentPage("detail")
}



  return (
    <div>
      {selectPage ()}
      <h1>STAR WARS</h1>
    </div>
  );
}

export default App;
