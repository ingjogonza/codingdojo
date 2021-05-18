import React, { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm'
import Results from './components/Results'
const App = () =>{
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
})
  return(
   <div className="App">
      <UserForm user={ user } setUser={ setUser }/>
      <Results user={ user } setUser={ setUser }/>
   </div>
    
    
  )
}


export default App;
