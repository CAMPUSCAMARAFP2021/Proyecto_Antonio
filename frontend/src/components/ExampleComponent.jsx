const imageToBase64 = require('image-to-base64');


const ExampleComponent = () =>{
    const handler = (event) =>{
        imageToBase64(event.target.value) // Path to the image
    .then(
        (response) => {
            console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
    }
    return <input type="file" onChange={handler}></input>;
}

export default ExampleComponent;
