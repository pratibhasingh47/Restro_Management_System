import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store'; // Adjust the path as needed
import { getMenuItems } from '../redux/reducers/menuSlice'; // Adjust the path as needed
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, Box, ButtonGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import wallpaper from '../assets/images/w1-transformed.jpeg';

const Home: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { menuItems, loading, error } = useSelector((state: RootState) => state.menu);
    const [expanded, setExpanded] = useState<string | false>(false);

    useEffect(() => {
        dispatch(getMenuItems());
    }, [dispatch]);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const categories = Array.from(new Set(menuItems.map(item => item.category)));

    return (
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 z-0 h-full">
                    <img
                        src={wallpaper}
                        alt="Landing background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-3/4 text-white bg-opacity-40">
                    <h1 className=" text-7xl font-lato font-bold text-center mb-6">
                        Welcome to <span className="text-accent1">Prat's Restaurant</span>
                    </h1>
                    <p className="text-center font-lato text-2xl mb-6" style={{ fontFamily: 'Dancing Script, Lato' }}>
                        "Experience the best dining with a touch of elegance and taste."
                    </p>
                    <button className="px-6 py-3 bg-accent1 hover:bg-accent2 text-black rounded-sm font-medium text-xl transition">
                        Explore Menu
                    </button>
                    <Box
                        sx={{
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& > *': {
                                mx: 2,
                            },
                        }}
                        className="mt-4 font-lato font-bold"
                    >
                        <ButtonGroup variant="text" aria-label="meal button group">
                            <Button sx={{ color: 'white' }}>Breakfast</Button>
                            <Button sx={{ color: 'white' }}>Lunch</Button>
                            <Button sx={{ color: 'white' }}>Dinner</Button>
                            <Button sx={{ color: 'white' }}>Special</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </div>


            <div className='flex flex-col items-center w-auto justify-center bg-accent1	'>
                <div className="mt-12 px-8 py-4">
                    <h2 className="text-5xl font-bold font-lato underline text-center mb-12">Our Menu</h2>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <div className="grid grid-cols-2 gap-20">
                            {categories.map(category => (
                                <div key={category} className="mb-10 ">
                                    <h3 className="text-2xl font-lato font-bold mb-4 uppercase">{category}</h3>
                                    {menuItems.filter(item => item.category === category).map(item => (
                                        <Accordion key={item._id} expanded={expanded === item._id} onChange={handleChange(item._id)}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel-${item._id}-content`}
                                                id={`panel-${item._id}-header`}
                                                sx={{
                                                    backgroundColor: 'white',
                                                    fontFamily: 'Lato , sans-serif',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.3rem',
                                                    padding: '5px 20px',
                                                }}
                                            >
                                                {item.name}
                                            </AccordionSummary>
                                            <AccordionDetails
                                                sx={{ padding: '10px 20px' }}
                                            >
                                                <div className="flex justify-between items-center font-lato ">
                                                    <span className='max-w-[400px]'>{item.description}</span>
                                                    <span className="font-extrabold text-xl  pr-4">${item.price}</span>
                                                </div>
                                            </AccordionDetails>
                                            <AccordionActions
                                                sx={{ padding: '10px 20px 20px 20px' }}
                                            >
                                                <Button variant="contained" color="primary"
                                                    sx={{
                                                        backgroundColor: 'black',
                                                        color: 'white',
                                                        fontFamily: 'Lato , sans-serif',
                                                        fontWeight: 'bold',
                                                        fontSize: '0.9rem',
                                                        padding: '10px 20px',
                                                        '&:hover': {
                                                            backgroundColor: 'black',
                                                            color: 'white',
                                                        }
                                                    }
                                                    }
                                                >Add to Orders</Button>
                                            </AccordionActions>
                                        </Accordion>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;