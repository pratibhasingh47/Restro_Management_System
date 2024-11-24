const Menu = require('../model/menu');

// Controller function to dispatch menu data to Redux
const dispatchMenuData = async (req, res) => {
    try {
        const { category, name, description, price } = req.body;

        // Create new menu item
        const newItem = new Menu({
            category,
            name,
            description,
            price,
            stock: 'yes' // Assuming new items are in stock by default
        });

        // Save to database
        await newItem.save();

        // Dispatch to Redux (assuming a Redux dispatch function is available)
        req.dispatch({
            type: 'ADD_MENU_ITEM',
            payload: { category, name, description, price }
        });

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addMenuData = async (req, res) => {
    try {
        const { category, name, description, price } = req.body;

        // Create new menu item
        const newItem = new Menu({
            category,
            name,
            description,
            price,
            stock: 'yes' // Assuming new items are in stock by default
        });

        // Save to database
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { dispatchMenuData ,addMenuData };