import React from 'react'
import  axios  from "axios";

const Form = (props) => {
    const {setListPokemon} = props;
    
    const handleSearch = ()=>{
       // console.log('paso')
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        const {data} = res;
        const {results} = data;
        setListPokemon(results);
        //console.log(results)
      })
        

    }
    

    return (
        <div>
            <button onClick={()=>handleSearch()}>Buscar Pokemones</button>        
        </div>
    )
}

export default Form
