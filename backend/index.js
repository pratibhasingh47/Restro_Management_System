// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./router/user');
// const errorHandler = require('./middleware/globarErrorhandlers');

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use('/auth', authRoutes);


// connectDB();
// app.use(errorHandler);

// app.listen(3000, () => {
//     console.log('Server is running http://localhost:3000');
// });




const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./router/user');
const menuRoutes = require('./router/menu'); // Ensure this path and the file are correct
const staffRoutes = require('./router/staff'); // Ensure this path and the file are correct
const errorHandler = require('./middleware/globarErrorhandlers'); // Ensure this path and the file are correct

const app = express();

app.use(express.json());
app.use(cors());

// Ensure authRoutes is a valid middleware function or router
app.use('/auth', authRoutes);
app.use('/menu', menuRoutes); // Ensure this path and the file are correct
app.use('/staff', staffRoutes); // Ensure this path and the file are correct

connectDB();

// Ensure errorHandler is a valid middleware function
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
});