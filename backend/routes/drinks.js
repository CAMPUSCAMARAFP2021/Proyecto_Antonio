var router = require('express').Router();
var drinksController = require('../controllers/drinks.js');

router.post('/',async(req, res) => {
    const {drink} = req.body;
    console.log(req.author)
    drink.author= req.author._id;
    const result =  await drinksController.createDrink(drink,req.author);
    res.json(result);
});

router.get('/', async(req, res) => {
    const drinks = await drinksController.getDrink(req);
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