var router = require('express').Router();
const { request } = require('express');
var authorsController = require('../controllers/authors');
const authorization = require('../middlewares/authorization');
var drinkRouter = require('./drinks');

router.post('/',async(req, res) => {
    const author = req.body;
    console.log(author)
    const result =  await authorsController.createAuthor(author);
    res.json(result);
});


router.post('/login',async(req, res) => {
    const{author,pass}=req.body
    const result=await authorsControllers.login(author,pass);
    res.json(result)
});

router.get('/', async(req, res) => {
    const authors = await authorsController.getAuthors();
    res.json(authors);
})

router.get('/:authorId', async(req, res) => {
    const {authorId} = req.params;
    const author = await authorsController.getAuthor(authorId);
    res.json(author);
})

router.use('/:authorId/drinks',authorization, async (req, res, next) => {
    const {authorId} = req.params;
    req.author = await authorsController.getAuthor(authorId);
    next();
} ,drinkRouter);


router.delete('/:authorId', async(req,res) => {
    const {authorId} = req.params;
    const result = await authorsController.deleteAuthor(authorId);
    res.json(result);
});

module.exports = router;