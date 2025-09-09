const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Import and mount blog routes
const blog = require('./routes/blog');
app.use('/api/v1', blog); // ✅ Fixed the route prefix

// Connect to DB
const connectWithDb = require('./config/database');
connectWithDb();

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is My Home Page, Coder</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
});
