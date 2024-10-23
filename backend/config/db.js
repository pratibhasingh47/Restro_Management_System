const  moongose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await moongose.connect("mongodb://localhost:27017/RMS");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;