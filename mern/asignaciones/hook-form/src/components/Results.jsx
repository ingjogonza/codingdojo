import React from 'react';
import './style/UserForm.scss'
 

const Results = (props) =>{

    const { user } = props;
    const {firstname, lastname, email, password,confirmPassword} = user;

    console.log(props)

    return(
        <div className="form-container">
            <h1>Results</h1>
            <div className="card">
                <p>FirstName: {firstname}</p>
                <p>LastName: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>        
        </div>
        

    )
}

export default Results;