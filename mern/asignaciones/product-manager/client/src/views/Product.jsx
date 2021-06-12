import React, { useEffect, useState } from 'react';
import { useParams, useHistory  } from "react-router-dom";
import axios from 'axios';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    let history = useHistory();

    const getASingleProduct = async () => {

        try {
            const res = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProduct(res.data.product);
        }
        catch (error) {
            return error;
        }
    }
    useEffect(() => {
        getASingleProduct();
    }, [])
    return (
        <div className="container">
            <div class="modal-body">
                <div class="container-fluid">
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

export default Product
