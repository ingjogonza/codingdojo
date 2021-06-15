import { useState, useEffect } from 'react'
import axios from 'axios';


const useProducts = ({ url, method }) => {
    const [request, setRequest] = useState(null);
   
    
    const fetchData = async () => {
        
        try{
            const res = await axios[method](url);
            console.log('respuesta de la busqueda',res);
            setRequest(res.data);
        }
        catch(error){
            return error
        }
    };

    useEffect(() => {
        fetchData();
    }, [method, url]);

    return { request };
    
}
export default useProducts;

