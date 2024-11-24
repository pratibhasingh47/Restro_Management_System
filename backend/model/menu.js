const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;