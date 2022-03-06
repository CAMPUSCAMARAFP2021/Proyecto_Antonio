var router = require('express').Router();
var drinksController = require('../controllers/drinks.js');
const drink = require('../models/Drink.js');

router.post('/',async(req, res) => {
    const {drink} = req.body;
    console.log(req.author)
    drink.author= req.author;
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

router.put('/:olddrinkId',async(req,res)=>{
    const{olddrinkId}=req.params;
    const {drink}=req.body;
    return drinksControllers.updateDrink(olddrinkId,drink)
})

router.delete('/:drinkId', async(req,res) => {
    const {drinkId} = req.params;
    const result = await drinksController.deleteDrink(drinkId);
    res.json(result);
});

module.exports = router;