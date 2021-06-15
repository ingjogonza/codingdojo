import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import useProduct from '../hooks/useProduct';


const DetailProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    const { response } = useProduct({
        method: 'get',
         url: 'http://localhost:8000/api/products/'+id
    });

    let history = useHistory();

    useEffect(() => {
       response !== null ? setProduct(response.productData) : setProduct({
        title: '',
        price: '',
        description: ''
    });
    }, [response])

    return (
        <div className="container">
            <div className="modal-body">
                <div className="container-fluid">
                    <div className="card card-body">
                        <div className="col text-center">
                            <h1>{product.title}</h1>
                            <h3>Price: {product.price}</h3>
                            <h3>Description: {product.description}</h3>
                            <h3>Created at: {product.createdAt} </h3>
                        </div>

                        <div className="row mb-3">

                            <div className="col text-center">
                                <button className="btn btn-secondary btn-lg" onClick={() => history.goBack()} >Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DetailProduct
