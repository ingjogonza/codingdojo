import './App.css';
import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import PokemonList from './components/PokemonList'

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    console.log(pokemonList)
  }, [pokemonList])

  return (
    <div className="App">
      <Button setPokemonList={setPokemonList}/>
      {pokemonList.length>0 ? pokemonList.map((pokemon,idx)=>{
        return(
          <PokemonList key={ idx } pokemon={ pokemon }/>
        )
      }) : 'No hay pokemones'}
      
    </div>
  );
}

export default App;
