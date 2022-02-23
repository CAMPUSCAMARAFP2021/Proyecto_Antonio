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

const login = async (name,password) => {

    const author = await Author.findOne({name});
    return buildJWT(author);
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
    const drink = await Task.findByIdAndDelete(authorId);
    return false;
}

module.exports = {
    login,
    createAuthor,
    getAuthors,
    getAuthor,
    deleteAuthor,
};