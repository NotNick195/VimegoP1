const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.get('/recommendations/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const userResponse = await axios.get(`http://gateway:8080/v1/user/${userId}`);
        const user = userResponse.data;
        // Generate recommendations based on user data
        const recommendations = ['song1', 'song2', 'song3'];
        res.json({ user, recommendations });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

app.listen(port, () => {
    console.log(`Service B listening at http://localhost:${port}`);
});
