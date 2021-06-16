import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import AuthorService from '../services/service.author';

const AuthorForm = () => {
    const initialState = {
        name: ''
    };
    const [author, setAuthor] = useState(initialState);
    const [error, setError] = useState('');
    const { id } = useParams();
    let history = useHistory();
    const authorService = new AuthorService;

    

    const createAuthor = async (e) => {
        e.preventDefault();
        await authorService.createAuthor(author);
        setAuthor(initialState);
        history.push("/");

    }
    const updateAuthor = async (e) => {
        e.preventDefault();
        await authorService.updateAuthor(id,author);
        setAuthor(initialState);
        history.push("/");

    }
    const handleChangeInput = (e) => {
        (e.target.value.length >0 && e.target.value.length <3) ? setError('* El nombre debe tener por lo menos 3 caracteres') : setError('')
        setAuthor({ ...author, [e.target.name]: e.target.value })
        //console.log(product)
    }
    const handleCommit = (e)=>{
        id ? updateAuthor(e) : createAuthor(e);
    }

    useEffect(()=>{
        const getSingleAuthorFromService = async (id) => {
            try {
                const singleAuthor = await authorService.getOneSingleAuthor(id);
                setAuthor(singleAuthor);
            } catch (err) {
                return err;
            }
    
        }
        id ? getSingleAuthorFromService(id) : setAuthor(initialState);
        
    },[])

    return (
        
            <div className="card card-body mt-3">
                <h3 className="text-center">{id ? 'Edit Author' : 'Create New Author'}</h3>
                <form onSubmit={(e) => handleCommit(e)}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="name" id="name" value={author.name} onChange={(e) => handleChangeInput(e)} />
                            <span className="badge bg-danger">{error}</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                            
                            <button type="submit" className="btn btn-primary btn-lg" >Save</button>
                            <button className="btn btn-secondary btn-lg" onClick={() => history.push("/")}>Cancel</button>
                                            
                        </div>

                    </div>
                        

                </form>

            </div>
       
    )
}

export default AuthorForm
