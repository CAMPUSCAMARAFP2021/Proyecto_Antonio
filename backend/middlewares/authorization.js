const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const {authorization} = req.query;
    const {author} = jwt.verify(authorization, 'secreto');
    req.author = author;
    next();
}