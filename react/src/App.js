import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinkList from './components/DrinkList';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import Register from './components/Register'
import { login,register} from './api/author';
import { useState } from 'react';
import LogOutButton from './components/LogOutButton';
import image from "./images/logo.png"
const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  const onLoginClick = (author, password) => {
    login(author,password)
     .then((jwt)=> setJwt(jwt))
     .catch((error) => console.log('No va crack'))
  }
  
  const onRegisterClick=(author,password)=>{
    register(author,password)
    .then((jwt)=> setJwt(jwt))
    .catch((error) => console.log('Error en el registro'))
  }
   
  return <Container className="p-3">
     <Container className="p-5 mb-4 bg-light rounded-3">
     <center><img class="mb-4" src={image} alt="´CockelLand" width="250" height="250"/></center>
     <br></br>
       {(jwt) ? <>
         <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
         <DrinkList jwt={jwt} />
       </> :
         <>
       <Login onLoginClick={onLoginClick}></Login>
       <Register onRegisterClick={onRegisterClick}/>
       </>
       
      }
       
     </Container>
   </Container> 
 }

export default App;