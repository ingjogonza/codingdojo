import { useEffect, useState } from 'react';
import  './App.css'
import Results from './components/Results';
import Search from './components/Search';
function App() {
  const options= ["People","Films","Starships", "Vehicles", "Species", "Planets"];
  const [singleItem, setSingleItem] = useState({})
  const [searchError, setSearchError] = useState(false)
  const [selected, setSelected] = useState('');
  useEffect(()=>{
    console.log('single item ',singleItem)
  },[singleItem])

  useEffect(()=>{
    console.log('search error ',selected)
  },[selected])
  return (
    <div>
      <Search selects={options} singleItem={singleItem} setSingleItem={setSingleItem} setSearchError={setSearchError} selected={selected} setSelected={setSelected}/> 
      <Results searchError={searchError} singleItem={singleItem} selected={selected}/>
    </div>
  

  );
}

export default App;
