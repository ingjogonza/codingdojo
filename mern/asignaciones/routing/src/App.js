import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Params from './components/Params';
import Styled from './components/Styled'
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [word, setWord] = useState('');
  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Params message={message} setMessage={ setMessage }  path="/:id"/>
            <Styled word ={ word } setWord={ setWord } path="/:param/:bgcolor/:color"/>
      </Router>
      
    </div>
  );
}

export default App;
