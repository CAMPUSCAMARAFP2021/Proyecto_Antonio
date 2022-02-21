const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    drink: [
        {type: Schema.Types.ObjectId, ref:'Drink'}
    ],
})

const Ingredient = model('Ingredient', schema);


module.exports = Ingredient;