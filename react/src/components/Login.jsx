import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [author, setAuthor] = useState('');
    const [password, setPassword] = useState('');

    const inputAuthorHandler = ({target}) => setAuthor(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);
    
    
    return <>
    
    <body class="text-center">
    <main class="form-signin">
    
  
        <h1 class="h3 mb-3 fw-normal">Sing-In ╰（‵□′）╯</h1>
        <div class="form-floating">
        <input type="text"class="form-control"id="username" name={author} onChange={inputAuthorHandler}></input><br/>
        <label for="username">Author Name</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="password" name={password} onChange={inputPasswordHandler}></input><br/>
        <label for="password">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" onClick={() => onLoginClick(author,password)}>Login</button><br/><br/>
        
       
        </main>
        
        </body>
    </>
}

export default Login;