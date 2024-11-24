const express = require('express');
const router = express.Router();
const { dispatchMenuData } = require('../controller/menu');
const Menu = require('../model/menu'); // Ensure that the Menu model is imported

// Route to get all menu items
router.get('/getMenu', async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to add a new menu item
router.post('/addMenu', dispatchMenuData);

// Route to update a menu item
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await Menu.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Menu.findByIdAndDelete(id);
        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;