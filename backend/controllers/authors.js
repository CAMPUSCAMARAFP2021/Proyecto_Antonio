const Author = require('../models/Author');
const jwt = require('jsonwebtoken');


const encriptarPassword = (pass) => {
    return pass;
}

const buildJWT = (author) => {
    const time = 1212;
    
    return jwt.sign({
        time,
        author
    }, 'secreto');
} 

const login = async (name, pass) => {

    const Correctauthor=await Author.findOne({name})
    if(!Correctauthor) throw new Error("author not found");
    if(pass == Correctauthor.pass){ return buildJWT(Correctauthor)
    } else{
    throw new Error("pass incorrect")}
}

const addDrinkToAuthor=async(author,drink)=>{
    return Author.findByIdAndUpdate(author._id,
        {
            $push:{drinks:drink._id}
        })
    
    }

const createAuthor = async(author) => {
    const {name} = author
    const checkuser = await Author.findOne({name})
    console.log(name, checkuser)
    if(checkuser == null){
        author.pass = encryptarPass(author.pass)
        const newAuthor = await Author.create(author)
        return buildJWT(newAuthor)
    }else{
        throw new Error("Autor ya registrado")
    }
}

const updateAuthor=async(authorId,author)=>{
    return await Author.findById(authorId).update(author);
}

const getAuthors = async() => {
    return await Author.find();
}

const getAuthor = async(authorId) => {
    return await Author.findById(authorId);
}

const deleteAuthor = async(authorId)=> {
    await Author.findByIdAndDelete(authorId);
    return false;
}

const addDrinkToAuthor = async(author, drink) =>{
    return await Author.findByIdAndUpdate(author._id,{
        $push:{drinks:drink}
    })
}

module.exports = {
    login,
    encriptarPassword,
    createAuthor,
    getAuthors,
    getAuthor,
    deleteAuthor,
    updateAuthor,
    addDrinkToAuthor
};