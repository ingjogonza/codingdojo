import './App.css';
import PersonCard from './components/personCard'

function App() {
  return (
    <div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jhon"} age={ 45 } hairColor={"Black"}/>
        <PersonCard lastName={"Smith"} firstName={"Jhon"} age={ 88 } hairColor={"Brown"}/>
        <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={ 50 } hairColor={"Brown"}/>
        <PersonCard lastName={"Smith"} firstName={"Maria"} age={ 62 } hairColor={"Brown"}/>
    </div>
  );
}

export default App;
