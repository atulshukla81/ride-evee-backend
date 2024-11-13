// app.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Parse JSON requests
app.use('/api', userRoutes); // Register routes

// Export the app for use in tests and server.js
module.exports = app;


// // app.js
// const express = require('express');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');

// require('dotenv').config();
// connectDB(); // Connect to MongoDB

// const app = express();
// app.use(express.json()); // Parse JSON requests
// app.use('/api', userRoutes); // Register routes

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
