const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    inStock: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;