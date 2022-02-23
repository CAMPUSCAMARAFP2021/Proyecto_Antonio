const Drink = require('../models/Drink');

const createDrink = async(drink)=>{
    return await Drink.create(drink);
}
const updateDrink = async(DrinkId, drink)=>{
     await Drink.findById(DrinkId).update(drink);
    return true;
}
const deleteDrink = async(DrinkId)=>{
     await Drink.findByIdAndDelete(DrinkId);
     return true;
}
const getDrink = async()=>{
    return await Drink.find()
}