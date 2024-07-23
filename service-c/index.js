const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

app.get('/subscription/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const userResponse = await axios.get(`http://gateway:8080/v1/user/${userId}`);
        const user = userResponse.data;
        // Provide subscription status based on user data
        const subscriptionStatus = 'active';
        res.json({ user, subscriptionStatus });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

app.listen(port, () => {
    console.log(`Service C listening at http://localhost:${port}`);
});

