const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    drinks: [
        {type: Schema.Types.ObjectId, ref:'Drink'}
    ]
})

const Author = model('Author', schema);


module.exports = Author;