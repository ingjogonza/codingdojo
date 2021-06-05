import React, {useEffect} from 'react'

const Params = (props) => {
   const { message, setMessage, id } = props;
   
   useEffect(() => {
    const handleMessage = ()=>{
        isNaN(id) ? setMessage('The Word is: '+ id) : setMessage('The Number is: ' + id);
       };
    handleMessage();
  })
   
   
    return (
        <div>
            {message}
        </div>
    )
}

export default Params
