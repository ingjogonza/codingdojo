import logo from './logo.svg';
import './App.css';

function App() {
  const saludos=' Madridistas'
  const arenga = 'Hala Madrid y nada mas!!'
  const halaMadrid = ()=> alert(`${arenga}`)
  return (
    <div className="App">
     <h1>Hola {saludos} </h1>
     <button onClick={halaMadrid}>Boton cualquiera</button>
    </div>
  );
}

export default App;
