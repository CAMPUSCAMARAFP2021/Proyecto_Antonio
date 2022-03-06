const login = async (author, pass) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({author, pass});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/authors/login", requestOptions)
        .then(response => response.json());
}

const register=async (name,password)=>{
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({author:{name, password}});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/authors/", requestOptions)
        .then(response => response.json());
}

export {
    login,
    register
};