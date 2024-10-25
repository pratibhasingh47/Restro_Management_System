// const errorHandler = (err, req, res, next) => {
//     let statusCode = err.statusCode || 500;
//     let message = err.message || "Internal Server Error";
//     if(err.name === "ValidationError") {
//         statusCode = 400;
//         const errors = {};
//         for (let key in err.errors) {
//             errors[key] = err.errors[key].message;
//         }
//         message = errors;
//     }
// };

// module.exports = errorHandler;





const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
        statusCode = 400;
        const errors = {};
        for (let key in err.errors) {
            errors[key] = err.errors[key].message;
        }
        message = errors; 
    }

    res.status(statusCode).json({
        status: "error",
        message,
    });
};

module.exports = errorHandler;
