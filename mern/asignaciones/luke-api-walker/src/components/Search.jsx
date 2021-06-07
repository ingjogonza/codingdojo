import React, { useState } from 'react'
import axios from 'axios';

const Search = ({selects, singleItem, setSingleItem, setSearchError, selected, setSelected}) => {
    const [idSearch, setIdSearch] = useState('');
    const searchItem = async ()=>{
        
           await axios.get(`https://swapi.dev/api/${selected}/${idSearch}`)
           .then(function (response) {
            // handle success
            setSearchError(false);
            setSingleItem(response.data)
          })
          .catch(function (error) {
            // handle error
            setSearchError(true);
          });
}

  
    return (

        <div className="container">
            <label>Search For:</label>
            <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option defaultValue>Search For</option>
                {selects.map((option, idx) => {
                    return (<option key={idx} value={option.toLowerCase()}>{option}</option>)
                })}
            </select>
            <label>ID</label>
            <input type="search" name="idSearch" id="idSearch" value={idSearch} onChange={(e)=>setIdSearch(e.target.value)} placeholder="ID Search" />
            <button onClick={()=>searchItem()}>Search</button>

        </div>

    )
}

export default Search
