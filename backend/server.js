// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Built-in middleware to parse JSON

// Database connection
const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/Mini';  // Use environment variable
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(error => console.error('Database connection error:', error));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/auth', userRoutes);

// Error handling for unknown routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
