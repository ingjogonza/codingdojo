import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useProducts from '../hooks/useProducts';


const Products = () => {

    let history = useHistory();
    
   const [productsList, setProductList] = useState([])
  
  // console.log('lista de productos',productsList);
   const { request } = useProducts({
    method: 'get',
     url: 'http://localhost:8000/api/products/'
});

const deleteProduct = async(id)=>{
    
    await axios.delete("http://localhost:8000/api/products/delete/"+id)
    history.go(0);
    
}
  
    useEffect(() => {
       

        if (request){
            setProductList(request.products);
        }
        else{
            setProductList([])
        }
        
    }, [request])


    return (
        <div className="container">
            <h1>Listado de Productos</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Prize</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsList.length > 0 && productsList.map((item) => (

                                    <tr key={item._id} value={item._id}>
                                       
                                        <th scope="row">{item.title}</th>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                                                <Link to={`/product/${item._id}`}>
                                                    {/* <span className="badge bg-info">View</span> */}
                                                    <button type="button" className="btn btn-sm btn-success">Details</button>
                                                </Link>
                                                <Link to={`/product/edit/${item._id}`}>
                                                    {/* <span className="badge bg-info">View</span> */}
                                                    <button type="button" className="btn btn-sm btn-warning">Update</button>
                                                </Link>
                                                <button type="button" className="btn btn-sm btn-danger" onClick={()=>deleteProduct(item._id)}>Delete</button>
                                                
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

export default Products
