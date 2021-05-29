import './App.css';
import Tabs from './components/Tabs'
import Rectangle from './components/Rectangle'
import React, { useState } from 'react'

function App() {
  const tabs = [
    {
      id: 0,
      message: 'Tab 1 content is showing here.'
    },
    {
      id: 1,
      message: 'Tab 2 content is showing here.'
    },
    {
      id: 2,
      message: 'Tab 3 content is showing here.'
    }
  ]
  const [rectangleMessage, setRectangleMessage] = useState('');
  return (
    <div className="App">
      {tabs.length > 0 ? tabs.map((tab)=>{
        return (<Tabs key={ tab.id } tab={ tab } rectangleMessage={ rectangleMessage } setRectangleMessage={ setRectangleMessage } tabs={ tabs }/>)
      }): 'No hay Tabs'}
      <Rectangle rectangleMessage={ rectangleMessage }/>
      
    </div>
  );
}

export default App;
