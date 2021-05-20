import React, { useState} from 'react';
import './style/UserForm.scss'

const UserForm = (props) => {
  const { user, setUser } = props;
  const {firstname, lastname, email, password,confirmPassword} = user;
  const [error, setError] = useState('');


    const clearForm = () =>{
        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    const setFormValues = (e) => {
       console.log(e)
        if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            emailRegex.test(e.target.value) ? setError('') : setError('*Favor ingresar un correo en formato xxxx@xxxx.xxxx');
        }else if (e.target.name==='firstname') {
            (e.target.value.length >0 && e.target.value.length <3) ? setError('* El primer nombre debe tener al menos 2 caracteres') : setError('')
        }
        else if (e.target.name==='lastname') {
            (e.target.value.length >0 && e.target.value.length <3) ? setError('* El apellido debe tener al menos 2 caracteres') : setError('')
        }
        else if (e.target.name==='password') {
            (e.target.value.length >0 && e.target.value.length <9) ? setError('* El password debe tener al menos 8 caracteres') : setError('')
        } 
        else if (e.target.name==='confirmPassword') {
            password === e.target.value ? setError('') : setError('* Los passwords no coinciden')
        }
        
        
        setUser({ ...user, [e.target.name]: e.target.value })

    }


    const createUser = (e) => {
        e.preventDefault();       
        const newUser = { firstname, lastname,email, password, confirmPassword }
        alert("Welcome", newUser.firstname)
        clearForm();
    };

    return (

        <div className="form-container">
            <h1>Login</h1>
            <div className="card">
                <form onSubmit={createUser}>
                    <label htmlFor="">FirstName:</label>
                    <input type="text" placeholder="Place your firstname" name="firstname" value={user.firstname} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Lastname:</label>
                    <input type="text" placeholder="Place your Fullname" name="lastname" value={user.lastname} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Place your email Ex: mail@foo.com" name="email" value={user.email} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" placeholder="Place your Password" name="password" value={user.password} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Confirma contraseña:</label>
                    <input type="password" placeholder="Confirm your Password" name="confirmPassword" value={user.confirmPassword} onChange={(e) => setFormValues(e)} />
                    <button type="submit" disabled={error !== '' ? true : false}>Login!</button>
                </form>
                <p className="error-message">{error}</p>

            </div>

        </div>


    );
};

export default UserForm;