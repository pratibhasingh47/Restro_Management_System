import React from 'react';
import Navbar from '../components/Navbar';
import wallpaper from '../assets/images/w1-transformed.jpeg';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<div className="relative h-screen overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0 h-full">
					<img
						src={wallpaper} // Replace with the correct image path or URL
						alt="Landing background"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Content Section */}
				<div className="relative z-10 flex flex-col items-center justify-center h-3/4 text-white bg-opacity-40">
					{/* Main Heading */}
					<h1 className=" text-7xl font-lato font-bold text-center mb-6">
						Welcome to <span className="text-accent1">Prat's Restaurant</span>
					</h1>

					{/* Paragraph or Quote */}
					<p className="text-center font-lato text-2xl mb-6" style={{ fontFamily: 'Dancing Script, Lato' }}>
						"Experience the best dining with a touch of elegance and taste."
					</p>

					{/* Booking Button */}
					<button className="px-6 py-3 bg-accent1 hover:bg-accent2 text-black rounded-sm font-semibold text-xl transition">
						Reserve Now
					</button>

					{/* Categories Section */}
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
		</div>
	);
};

export default Home;