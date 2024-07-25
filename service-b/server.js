const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/recommendations', (req, res) => {
    axios.get('http://localhost:3001/user-profile')
        .then(response => {
            const userProfile = response.data;
            const recommendations = generateRecommendations(userProfile);
            res.send(recommendations);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

function generateRecommendations(userProfile) {
    return userProfile.favoriteGenres.map(genre => `${genre} playlist`);
}

app.listen(port, () => {
    console.log(`Service B listening at http://localhost:${port}`);
});
