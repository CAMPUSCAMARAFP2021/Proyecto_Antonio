import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Drink = ({drink, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{drink.name}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

export default Drink;