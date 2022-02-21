const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    ingridient: [
        {type: Schema.Types.ObjectId, ref:'Ingredient'}
    ]
})

const IngredientApplication = model('IngredientApplication', schema);


module.exports = IngredientApplication;