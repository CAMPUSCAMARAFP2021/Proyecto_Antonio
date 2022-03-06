import { useState } from "react";
import Button from './Button';

const DrinkForm = ({createDrink}) => {
    const [drink, setDrink] = useState(
        {
            "name": ""
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setDrink( lastValue => ({...lastValue, name}))
    }




    return <>
    <br/>
    <h2>Add New Drink</h2>
        <form>
        <div class="form-floating">
            <input type="text" class="form-control" id="nombre" name="nombrebebida" onChange={setName} value={drink.name}></input>
            <label for="nombre">Nombre de la Bebida</label><br></br>
            </div>
            <br></br>
        </form>
        <Button name="enviar" onClick={() => createDrink(drink)}></Button><br></br>
       
    </>;
}
export default DrinkForm;