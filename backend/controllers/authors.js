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

const login = async (name) => {

    const author = await Author.findOne({name});
    return buildJWT(author);
}

const addDrinkToAuthor=async(author,drink)=>{
    return Author.findByIdAndUpdate(author._id,
        {
            $push:{drinks:drink._id}
        })
    
    }

const createAuthor = async(author) => {

    author.password = encriptarPassword('hola mundo');
    return await Author.create(author);
}

const getAuthors = async() => {
    return await Author.find();
}

const getAuthor = async(authorId) => {
    return await Author.findById(authorId);
}

const deleteAuthor = async(authorId)=> {
    const drink = await drink.findByIdAndDelete(authorId);
    return false;
}

module.exports = {
    login,
    createAuthor,
    getAuthors,
    getAuthor,
    deleteAuthor,
    addDrinkToAuthor
};