import { useState, useEffect } from 'react'
import axios from 'axios';


const useProduct = ({ url, method }) => {
    const [response, setResponse] = useState(null);
   
    
    const fetchData = async () => {
        
        try{
            const res = await axios[method](url);
            console.log('respuesta de la busqueda',res);
            setResponse(res.data);
        }
        catch(error){
            return error
        }
    };

    useEffect(() => {
        fetchData();
    }, [method, url]);

    return { response };
    
}
export default useProduct;

