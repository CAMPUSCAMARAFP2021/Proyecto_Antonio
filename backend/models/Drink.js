const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    author: {type: Schema.Types.ObjectId, ref:'Author'},
    ingredients: [
        {type: Schema.Types.ObjectId, ref:'IngredientApplication'}
    ]
})

const Drink = model('Drink', schema);

module.exports = Drink;