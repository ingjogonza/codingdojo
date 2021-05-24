import { useReducer, useState } from "react";
import './UserForm.scss';



const UserForm = ()=>{
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
    const [error, setError] = useState(null);

const reducer = (state, action)=>{

    switch (action.type) {
        case 'ch_firstname':{
            let error_def = "";
            (action.value.length>0 && action.value.length<3) ? error_def="'* El primer nombre debe tener al menos 2 caracteres'" : error_def=null;
            setError(error_def)
            return {...state,
            firstName:{...state.firstName, value:action.value, error:error_def }}         
        
        }
        case 'ch_lastname':{
            let error_def = "";
            (action.value.length>0 && action.value.length<3) ? error_def="'* El apellido debe tener al menos 2 caracteres'" : error_def=null;
            setError(error_def)
            return {...state,
            lastName:{...state.lastName, value:action.value, error:error_def }}         
        
        }
        case 'ch_email':{
            let error_def = "";
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            emailRegex.test(action.value) ? error_def=null : error_def="'*Favor ingresar un correo en formato xxxx@xxxx.xxxx'";
            setError(error_def)
            return {...state,
                email:{...state.email, value:action.value, error:error_def }}         
        
        }
    
        default:
           return state;
    }
   
}

const [state,dispatch] = useReducer(reducer,initialState);
       
    return(
        <div className="form-container">
            <div className="card">
                <form>
                    <label htmlFor="">FirstName:</label>
                    <input type="text" placeholder="Place your firstname" name="firstName" value={state.firstName.value} 
                    onChange={(event)=>{
                        dispatch({type: 'ch_firstname', name:'firstName', value: event.target.value})
                        }
                        }  />
                    <label htmlFor="">Lastname:</label>
                    <input type="text" placeholder="Place your Fullname" name="lastName" value={state.lastName.value}  onChange={(event)=>{
                        dispatch({type: 'ch_lastname', value: event.target.value})
                        }
                        }    />
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Place your email Ex: mail@foo.com" name="email" value={state.email.value}  onChange={(event)=>{
                        dispatch({type: 'ch_email', value: event.target.value})
                        }
                        }   />
                </form>
                <p className="error-message">{error}</p>
                    
            </div>
        </div>
        
    )

}

export default UserForm;