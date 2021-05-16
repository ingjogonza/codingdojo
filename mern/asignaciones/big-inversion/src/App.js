import './App.css';
import PersonCard from './components/PersonCard'

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
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  }
]


const App = () =>{

  return(
    <div className="App"> 
      {persons.length >0 ? persons.map((person, index) =>{
      return <PersonCard key={ index} person={ person }/>
      }) : 'Sin personas que procesar'}
  </div>

  )

 
}


export default App;
