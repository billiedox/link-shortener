import mongoose from 'mongoose';

const connection = async () => {
    const URL = 'mongodb://localhost:27017/salt'; // Local connection string

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database:', error);
    }
};

// Call the connection function
export default connection;