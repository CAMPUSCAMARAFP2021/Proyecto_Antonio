const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    password: String,
    drinks: [
        {type: Schema.Types.ObjectId, ref:'drinks'}
    ]
})

const Author = model('Author', schema);


module.exports = Author;