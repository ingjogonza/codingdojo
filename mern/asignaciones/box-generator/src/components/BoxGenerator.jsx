import React from 'react';
import './components.css'

const BoxGenerator = (props) => {

const { box, setBox, setBoxesList, boxesList } = props;
console.log(boxesList)

const createBox = (e) => {
    e.preventDefault();
    const idBox =  boxesList.length + 1;
    let newBox = {id: idBox, color: box.color};
    setBoxesList ([...boxesList, newBox]);
    setBox({id: '', color: ''}) //limpia el formulario
}



   
    return(
            
            <div className="input-container">
                
                <form onSubmit={ createBox }>
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" id="color" value={ box.color } placeholder="Ingresa el color del cuadro" onChange={(e) => setBox({ ...box, [e.target.name]: e.target.value })}/>
                    <button>Add</button>
                </form>
        
            </div>
        
    )
}

export default BoxGenerator;