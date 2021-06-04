import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List'

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  useEffect(() => {
    console.log('lista',listPokemon)
  }, [listPokemon])
  return (
    <div className="App">
      <Form setListPokemon={setListPokemon}/>
      {listPokemon.length > 0 ? listPokemon.map((pokemon,idx) =>{
        return(
          <List key= {idx} pokemon={pokemon}/>
        )
      }) : 'No hay Pokemones Cargados'}
    </div>
  );
}

export default App;
