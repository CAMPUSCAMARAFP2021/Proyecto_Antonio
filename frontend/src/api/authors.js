const login = async (user, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({user, password});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/authors/login", requestOptions)
        .then(response => response.json());
}

export {
    login
};