import { useState } from 'react';
import './App.css';
import Wrapper from './contexts/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper'

function App() {
  
  return (
    <div className="App">
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
    </div>
  );
}

export default App;
