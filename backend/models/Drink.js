const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    author: {type: Schema.Types.ObjectId, ref:'Author'}
})

const Drink = model('Drink', schema);

module.exports = Drink;