const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true, 
        unique: true 
    },
    description: {
        type: String,
        required: false 
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product' 
        }
    ]
});

module.exports = mongoose.model('Category', CategorySchema);
