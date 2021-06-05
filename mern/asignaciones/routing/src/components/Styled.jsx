import React, {useEffect} from 'react'

const Styled = (props) => {
    const { word, setWord, param, bgcolor, color } = props;
    const divStyle ={
        backgroundColor: bgcolor,
        color: color,
    }
   
   useEffect(() => {
    const handleWord = ()=>{
        setWord('The Word is: '+ param)
       };
       handleWord();
  })

    return (
        <div style={ divStyle }>
            {word}
        </div>
    )
}

export default Styled
