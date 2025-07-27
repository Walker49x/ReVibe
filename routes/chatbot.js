const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync');
const { isLoggedIn } = require("../middleware");
const axios = require('axios');
const cors = require('cors');

router.use(cors());

router.get('/', (req, res) => {
    res.render("listings/chatbot.ejs");
});

router.post('/', wrapAsync(async (req, res) => {
    const { message } = req.body;
    console.log(message)
    try {
        // Send the request to Rasa server
        const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
            sender: 'user',
            message: message
        });

        const chatbotResponse = response.data[0].text;
        // Send back the response from Rasa server to the client
        res.json({ message: chatbotResponse });
    } catch (error) {
        console.error('Error sending message to Rasa:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));

module.exports = router;
