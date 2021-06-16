import React, { useEffect, useState } from 'react'
import AuthorService from '../services/service.author';
import { Link } from 'react-router-dom'

const AuthorsList = () => {
    const authorService = new AuthorService;
    const [authorList, setAuthorList] = useState([]);
    const getAllAuthorFromService = async () => {
        try {
            const List = await authorService.getAllAuthors();
            setAuthorList(List);
        } catch (err) {
            return err;
        }

    }
    const deleteAuthor = async (id)=>{
        try{
            await authorService.deleteAuthor(id);
            getAllAuthorFromService();

        }
        catch(err){
            return err;
        }

    }
    useEffect(()=>{
        getAllAuthorFromService();
    },[])
    return (
        <div className="container">
            <h3>We have quotes by:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.length > 0 && authorList.map((item) => (

                            <tr key={item._id} value={item._id}>

                                <th scope="row">{item.name}</th>
                                <td>
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                                        <Link to={`/edit/${item._id}`}>
                                            <button type="button" className="btn btn-sm btn-warning">Edit</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteAuthor(item._id)}>Delete</button>

                                    </div>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>


            </table>


        </div>
    )
}

export default AuthorsList
