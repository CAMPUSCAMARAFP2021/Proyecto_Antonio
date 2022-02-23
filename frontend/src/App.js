import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import { login } from './api/authors';
import { useState } from 'react';
import LogOutButton from './components/LogOutButton';


const App = () =>{
 const [jwt, setJwt] = useState(false);

 const onLoginClick = (user, password) => {
   login(user,password)
    .then((jwt)=> setJwt(jwt))
    .catch((error) => console.log('no va crack'))
 }
  
 return <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      {jwt ? <>
        <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
      </> : 
      <Login onLoginClick={onLoginClick}/>}
    </Container>
  </Container> 
}

export default App;