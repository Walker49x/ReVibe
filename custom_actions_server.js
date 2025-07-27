const express = require('express');

// Create an Express application
const app = express();
const port = 8000; // Specify the port number

// Define a route for handling custom actions
app.post('/webhook', (req, res) => {
    // Implement custom action logic here
    // For example, send a response back to the Rasa Core server
    res.json({ message: 'This is a custom action response' });
});

// Start the server
app.listen(port, () => {
    console.log(`Custom actions server listening at http://localhost:${port}`);
});
