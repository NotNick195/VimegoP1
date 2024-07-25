const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.get('/recommendations/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await axios.get(`http://localhost:8080/v1/user/${userId}`);
    res.json({ user: user.data, recommendations: ['song1', 'song2'] });
});

app.listen(port, () => {
    console.log(`Service B listening at http://localhost:${port}`);
});

