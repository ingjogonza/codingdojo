import React from 'react'
import Error from '../views/Error'
import Films from '../views/Films'
import People from '../views/People'
import Planets from '../views/Planets'
import Species from '../views/Species'
import StartShips from '../views/StartShips'
const Results = ({searchError,singleItem, setSingleItem,selected}) => {
    //console.log(searchError)
    console.log(Object.keys(singleItem).length)
        // useEffect(()=>{
        //    // const singleItemLength = Object.keys(singleItem).length
        //     (Object.keys(singleItem).length === 0) ? setSearchError(true): setSearchError(false)

        // },[singleItem])
   
        const handleComponent = ()=>{
            switch (selected) {
                case 'people':
                    return <People singleItem={singleItem}/>
                case 'films':
                    return <Films singleItem={singleItem}/>
                case 'starships':
                    return <StartShips singleItem={singleItem}/>
                case 'vehicles':
                    return <StartShips singleItem={singleItem}/>
                case 'species':
                    return <Species singleItem={singleItem}/>
                case 'planets':
                    return <Planets singleItem={singleItem}/>
                default:
                    break;
            }
    
        }
        
      
    
    


    return (
        <div className="container-results ">
            {searchError ? <Error/> : (
                Object.keys(singleItem).length > 0 ? handleComponent() : '')}
        </div>
    )
}

export default Results
