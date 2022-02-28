const Drink = require('../models/Drink');
const AuthorController=require('./authors');


const createDrink = async(drink, author)=>{
    const create = await Drink.create(drink)
    const addDrinkToAuthor = await AuthorController.addDrinkToAuthor(author,create);
    return create;
}
const updateDrink = async(DrinkId, drink)=>{
     await Drink.findById(DrinkId).update(drink);
    return true;
}
const deleteDrink = async(DrinkId)=>{
     await Drink.findByIdAndDelete(DrinkId);
     return true;
}
const getDrink = async({author})=>{
    return await Drink.find({author})
}



module.exports = {
    createDrink,
    updateDrink,
    deleteDrink,
    getDrink,
};