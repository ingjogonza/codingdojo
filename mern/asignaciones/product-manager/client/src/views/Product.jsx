import React, { useEffect, useState } from 'react';
import { useParams, useHistory  } from "react-router-dom";
import axios from 'axios';
import useProduct from '../hooks/useProduct';

const Product = () => {

    let history = useHistory();
   // const [productsList, setProductList] = useProduct()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });
    // const [idSearch, setIdSearch] = useState(null)
   
    const { id } = useParams()
  
    
    const createProduct = async (e) => {
        
        e.preventDefault();
        await axios.post('http://localhost:8000/api/products/new', {
            title: product.title,
            price: product.price,
            description: product.description
        })
        setProduct({
            title: '',
            price: '',
            description: ''
        })
        history.push("/")
       // getAllProducts();

    }
    const updateProduct = async (e) => {
        
        e.preventDefault();
        await axios.put('http://localhost:8000/api/products/update/'+id, {
            title: product.title,
            price: product.price,
            description: product.description
        })
        setProduct({
            title: '',
            price: '',
            description: ''
        })
        history.push("/")
      //  getAllProducts();

    }

    const handleCommit = (e)=>{
        id ?  updateProduct(e) : createProduct(e);
    }
    const handleChangeInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }

   useEffect(() => {
    
    const idSearch = id ? id : null;

    const getASingleProduct = async ()=>{

        try{
            const response = await axios.get('http://localhost:8000/api/products/'+idSearch);
 
           let productResponse = response.data !== null ? response.data.productData : {
             title: '',
             price: '',
             description: ''
         }
            setProduct(productResponse);
 
        }
        catch(error){
            return error;
        }
        
    }

    idSearch === null ? setProduct({
        title: '',
        price: '',
        description: ''
    }) : getASingleProduct();
   }, [])

    // useEffect(() => {
    //      const idSearch = id ? id : null;
    //      const getASingleProduct = async ()=>{

    //         try{
    //             const response = await axios.get('http://localhost:8000/api/products/'+idSearch);
    //             setProduct(response.data !== null ? response.data.productData : {
    //                 title: '',
    //                 price: '',
    //                 description: ''
    //             })

    //         }
    //         catch(error){
    //             return error;
    //         }
            
    //     }
    //     getASingleProduct();
    

        
    //     console.log('estado actual product', product)
    // },[])

   

    return (    
        <div className="container">
                <div className="card card-body">
                        <h3 className="text-center">{id ? 'Edit Product' : 'Create New Product'}</h3>
                        <form onSubmit={(e) => handleCommit(e)}>
                            <div className="row mb-3">
                                <label htmlFor="title" className="col-sm-5 col-form-label">Title</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name="title" id="title" value={product.title} onChange={(e) => handleChangeInput(e)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="price" className="col-sm-5 col-form-label">Price</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name="price" id="price" value={product.price} onChange={(e) => handleChangeInput(e)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="description" className="col-sm-5 col-form-label">Description</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name="description" id="description" value={product.description} onChange={(e) => handleChangeInput(e)} />
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col text-center">
                                    <button type="submit" className="btn btn-primary btn-lg">Save</button>
                                </div>
                            </div>


                        </form>

                    </div>
        </div>
    )
}

export default Product;
