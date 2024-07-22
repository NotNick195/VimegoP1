const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

app.get('/subscription/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await axios.get(`http://localhost:8080/v1/user/${userId}`);
    res.json({ user: user.data, subscriptionStatus: 'active' });
});

app.listen(port, () => {
    console.log(`Service C listening at http://localhost:${port}`);
});