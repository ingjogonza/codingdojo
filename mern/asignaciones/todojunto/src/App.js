import './App.css';
import PersonCard from './components/personCard';

const persons =[
  {
    firstName: "Jhon",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  },
  {
    firstName: "Jhon",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  },
  {
    firstName: "Margaret",
    lastName: "Tatcher",
    age: 98,
    hairColor: "Silver"
  }
]

function App() {
  return (
    <div className="App">
      {persons.length >0 ? persons.map((person, index) =>{
       return <PersonCard key={ index} person={ person }/>
      }) : 'Sin personas que procesar'}
    </div>
  );
}

export default App;
