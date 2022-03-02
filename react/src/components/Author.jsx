import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Author = ({  author, onDelete }) =>  {
const [condition,setCondition] = useState(false)
const openTeaminterface = () =>{
    setCondition(true) 
    }
 return <>

    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{author.duration}</Card.Title>
            <Card.Title>{author.score}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
            <Button variant="primary" onClick={openTeaminterface}>Seleccionar Author</Button>
        </Card.Body>
    </Card>
   { {if (condition) {
       <Card>
        Aqui selecciono Author.
    </Card>
   }}} 
    </>
}

    
export default Author;