// server.js
const app = require('./app'); // Import the app instance from app.js

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
