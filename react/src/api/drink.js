const getDrink = async (jwt) => {
    const headers = new Headers();
    headers.append("authorization", jwt);
    return fetch("http://localhost:3000/drinks", {headers})
    .then(res => res.json())
}

const createDrink = async (drink, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const body = JSON.stringify({drink});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/drinks", requestOptions)
        .then(response => response.json());
}

const deleteDrink = async (drink, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/drinks/" + drink._id, requestOptions)
        .then(response => response.text());
}

export {
    getDrink,
    createDrink,
    deleteDrink,
}