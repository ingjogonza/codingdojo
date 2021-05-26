import './App.css';
import { useState } from 'react';
import BoxGenerator from './components/BoxGenerator'
import BoxList from './components/BoxList'


function App() {

  const [boxesList, setBoxesList] = useState([])

  const [box, setBox] = useState({
    id: '',
    color: ''
  })

  return (
    <div>
      <BoxGenerator box={ box } setBox = { setBox } boxesList = { boxesList } setBoxesList = { setBoxesList }/>
      {boxesList.length > 0 ? boxesList.map((box, index) => {
          return (<BoxList key={index} box={box} />)

        }) : 'No hay cajas creadas'}
    </div>
  );
}

export default App;
