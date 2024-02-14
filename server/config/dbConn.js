const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connection established successfully');

        mongoose.connection.on('error', (err) => {
            console.error('Database connection error: ', err);
        });
    } catch (err) {
        console.error('Could not connect to database: ', err);
    }
}

module.exports = connectDatabase;