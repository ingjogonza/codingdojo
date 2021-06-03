import React  from 'react';

const Button = (props) => {
    const { setPokemonList } = props;

   const fetchData = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        //.then(console.log)
        .then(response => setPokemonList(response.results))
}

const handleSearch = ()=>{
    fetchData()
}

// useEffect(() => {
  
//     fetchData()
    
//   }, [search])

    return (
        <div>
            <button onClick={()=>handleSearch()}>Buscar Pokemones</button>
        </div>
    )
}

export default Button
