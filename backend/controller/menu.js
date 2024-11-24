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

const updateMenuData = async (req, res) => {
    try {
        const { id, category, name, description, price, inStock } = req.body;

        // Find the existing menu item by ID
        const item = await Menu.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        // Update the menu item with new data
        item.category = category;
        item.name = name;
        item.description = description;
        item.price = price;
        item.stock = inStock ? 'yes' : 'no';

        // Save the updated item to the database
        const updatedItem = await item.save();

        // Dispatch to Redux (assuming a Redux dispatch function is available)
        req.dispatch({
            type: 'UPDATE_MENU_ITEM',
            payload: { id, category, name, description, price, inStock }
        });

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMenuData = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the existing menu item by ID
        const item = await Menu.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        // Dispatch to Redux (assuming a Redux dispatch function is available)
        req.dispatch({
            type: 'DELETE_MENU_ITEM',
            payload: { id }
        });

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { dispatchMenuData, addMenuData, updateMenuData, deleteMenuData };