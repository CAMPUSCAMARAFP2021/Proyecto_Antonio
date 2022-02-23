var router = require('express').Router();
var drinksController = require('../controllers/drinks');

router.post('/',async(req, res) => {
    const {drink} = req.body;
    const result =  await drinksController.createDrink(drink);
    res.json(result);
});

router.get('/', async(req, res) => {
    const {author} = req;
    const drinks = await drinksController.getDrink(author);
    res.json(drinks);
})

router.get('/:drinkId', async(req, res) => {
    const {drinkId} = req.params;
    const drink = await drinksController.getDrink(drinkId);
    res.json(drink);
})

router.delete('/:drinkId', async(req,res) => {
    const {drinkId} = req.params;
    const result = await drinksController.deleteDrink(drinkId);
    res.json(result);
});

module.exports = router;