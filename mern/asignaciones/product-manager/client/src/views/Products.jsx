import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ productsList, setProductsList }) => {
    const [product, setproduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    const getAllProducts = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/products')
            setProductsList(res.data.products);
            console.log(productsList);


        }
        catch (error) {
            return error;
        }
    }

    const handleChangeInput = (e)=>{
        setproduct({...product,[e.target.name]: e.target.value})
    }
    
    const createProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/products/new',{
            title: product.title,
            price: product.price,
            description: product.description
        })
        setproduct({
            title: '',
            price: '',
            description: ''
        })
        
        getAllProducts();
        
    };

    useEffect(() => {
        getAllProducts();
    }, [])


    return (
        <div className="container">
            <div className="row mt-1">
                <div className="col-md-5">
                    <div className="card card-body">
                        <h3 className="text-center">Create New Product</h3>
                        <form onSubmit={(e)=>createProduct(e)}>
                            <div className="row mb-3">
                                <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="title" id="title" value={product.title} onChange={(e) => handleChangeInput(e)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="price" className="col-sm-3 col-form-label">Price</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="price" id="price" value={product.price}  onChange={(e) => handleChangeInput(e)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="description" id="description" value={product.description} onChange={(e) => handleChangeInput(e)}/>
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
                    <div className="col-md-7">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Prize</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productsList.length > 0 && productsList.map((item) => (
                                        <tr key={item._id}>
                                            <th scope="row">{item.title}</th>
                                            <td>{item.price}</td>
                                            <td>{item.description}</td>
                                        </tr>

                                    ))
                                }

                            </tbody>


                        </table>

                    </div>


                </div>

            </div>

    )
}

export default Products
