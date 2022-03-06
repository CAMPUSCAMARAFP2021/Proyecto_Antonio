import Drink from "./Drink"
import DrinkForm from './DrinkForm';

import { useState, useEffect } from 'react';
import { getDrink, createDrink, deleteDrink } from "../api/drink";



const DrinkList = ({jwt}) => {
    const [drinks, setDrink] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const doCreateDrink = (drink) => {
        setIsLoading(true);
        createDrink(drink,jwt)
            .then((newDrink) => {
                 setDrink((prevState) => [...prevState, newDrink]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteDrink = (drink) => {
        setIsLoading(true);
        deleteDrink(drink,jwt)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getDrink(jwt).then((drink) => {    
            setIsLoading(false);
            setDrink(drink);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
     <DrinkForm createDrink={doCreateDrink}></DrinkForm><br></br>
        {isLoading ? 
            <p>cargando...</p> : 
            drinks.map(drink => 
                <Drink 
                    key={drink._id} 
                    drink={drink} 
                    onDelete={() => doDeleteDrink(drink)}
                />)}
       
    </>
        
}
    

export default DrinkList;