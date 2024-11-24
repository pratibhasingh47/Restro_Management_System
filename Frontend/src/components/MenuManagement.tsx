import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from '../redux/reducers/menuSlice'; // Adjust the path as needed
import { RootState } from '../redux/reducers'; // Adjust the path as needed
import { AppDispatch, useAppDispatch } from '../redux/store/store'; // Adjust the path as needed
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontFamily: 'Lato, sans-serif' // Set the font to Lato
};

const MenuManagement: React.FC = () => {
    const dispatch = useAppDispatch(); // Use the custom typed dispatch
    const { menuItems, loading, error } = useSelector((state: RootState) => state.menu);

    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        category: '',
        name: '',
        description: '',
        price: '',
        inStock: 'yes'
    });

    useEffect(() => {
        dispatch(getMenuItems());
    }, [dispatch]);

    const handleOpen = (item?: any) => {
        if (item) {
            setIsEditing(true);
            setFormData({
                id: item._id,
                category: item.category,
                name: item.name,
                description: item.description,
                price: item.price.toString(),
                inStock: item.inStock ? 'yes' : 'no'
            });
        } else {
            setIsEditing(false);
            setFormData({
                id: '',
                category: '',
                name: '',
                description: '',
                price: '',
                inStock: 'yes'
            });
        }
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDelete = (id: string) => {
        dispatch(deleteMenuItem(id));
    };

    const handleSubmit = () => {
        const newItem = {
            _id: new Date().toISOString(), // Temporary ID, replace with actual ID generation logic
            ...formData,
            price: parseFloat(formData.price),
            inStock: formData.inStock === 'yes' ? true : false,
            stock: formData.inStock === 'yes' ? 'In Stock' : 'Out of Stock' // Add the stock property
        };
        dispatch(addMenuItem(newItem));
        handleClose();
    };

    const handleUpdate = () => {
        const updatedItem = {
            _id: formData.id,
            category: formData.category,
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            inStock: formData.inStock === 'yes',
            stock: formData.inStock === 'yes' ? 'In Stock' : 'Out of Stock' // Add the stock property
        };
        dispatch(updateMenuItem({ id: formData.id, item: updatedItem }));
        handleClose();
    };

    return (
        <div style={{ fontFamily: 'Lato, sans-serif', backgroundColor: 'black', color: 'white', height: '100vh' }}>
            <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', top: 125, right: 40 }}>
                <Button
                    sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', color: '#001D3D', fontWeight: 'bold', padding: '10px 20px' }}
                    variant="contained" color="primary" onClick={() => handleOpen()} startIcon={<AddIcon />}>
                    Add Menu
                </Button>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }}>
                            {isEditing ? 'Update Menu Item' : 'Add New Menu Item'}
                        </Typography>
                        <TextField
                            label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="In Stock"
                            name="inStock"
                            value={formData.inStock}
                            onChange={handleChange}
                            select
                            fullWidth
                            margin="normal"
                            SelectProps={{
                                native: true,
                                style: { fontFamily: 'Lato, sans-serif' }
                            }}
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </TextField>
                        <Button
                            onClick={isEditing ? handleUpdate : handleSubmit}
                            variant="contained"
                            color="primary"
                            style={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', marginTop: '20px', color: 'black', fontWeight: 'bold' }}
                        >
                            {isEditing ? 'Update Item' : 'Add to Menu'}
                        </Button>
                    </Box>
                </Fade>
            </Modal>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', marginLeft: '100px', marginRight: '100px' }}>
                <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
                        Menu Items
                    </Typography>
                    {loading && <Typography style={{ fontFamily: 'Lato, sans-serif' }}>Loading...</Typography>}
                    {error && <Typography style={{ fontFamily: 'Lato, sans-serif' }}>Error: {error}</Typography>}
                    <Grid container spacing={6} sx={{ marginLeft: '80px', marginRight: '80px' }}>
                {menuItems.map((item) => (
                    <Grid item xs={12} sm={4} key={item._id}>
                        <Card sx={{ minWidth: 275, padding: '10px' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                                    {item.category}
                                </Typography>
                                <Typography variant="h5" component="div" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 'bold', fontSize: '24px' }}>
                                    {item.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5, mt: 0.5, fontFamily: 'Lato, sans-serif' }} color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'Lato, sans-serif' }}>
                                    Price: ${item.price}
                                    <br />
                                    In Stock: {item.stock}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', color: '#001D3D', fontWeight: 'bold', fontSize: '15px', padding: '5px 10px' }}
                                    startIcon={<EditIcon />}
                                    onClick={() => handleOpen(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="small"
                                    sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#001D3D', color: '#fff', fontWeight: 'bold', fontSize: '15px', padding: '5px 10px' }}
                                    startIcon={<DeleteIcon />}
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
                </Box>
            </div>
        </div>
    );
};

export default MenuManagement;