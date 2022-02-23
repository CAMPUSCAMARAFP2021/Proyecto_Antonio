const Ingredient = require('../models/Ingredient');

const createIngredient = async(ingredient)=>{
    return await Ingredient.create(ingredient);
}
const updateIngredient = async(IngredientId, ingredient)=>{
    await Ingredient.findById(IngredientId).update(ingredient);
    return true;
}
const deleteIngredient = async(IngredientId)=>{
    await Ingredient.findByIdAndDelete(IngredientId);
    return true;
}
const getIngredient = async()=>{
    return await Ingredient.find()
}