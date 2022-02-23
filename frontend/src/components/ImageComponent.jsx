const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

const ImageComponent = ({readyImage}) =>{
    const handler = (event) =>{
    imageToBase64(event.target.files[0])
    .then(
        (response) => {
            readyImage(response);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )
    }
    return <input type="file" onChange={handler}></input>;
}

export default ImageComponent;
