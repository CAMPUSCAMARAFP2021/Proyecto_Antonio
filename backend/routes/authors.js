var router = require('express').Router();
var authorsController = require('../controllers/authors');

var drinkRouter = require('./drinks');

router.post('/',async(req, res) => {
    const {author} = req.body;
    const result =  await authorsController.createAuthor(author);
    res.json(result);
});


router.post('/login',async(req, res) => {
    const {author} = req.body;
    const result = await authorsController.login(author.name, author.password);
    res.json(result);
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

router.use('/:authorId/drinks', async (req, res, next) => {
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