const express = require('express');
const app = express();
const port = 3001;

app.get('/v1/user/:id', (req, res) => {
    // Simulate fetching user data from a database
    const userData = {
        id: req.params.id,
        name: 'User V1',
        email: 'userv1@example.com',
        genres: ['rock', 'pop'],
        interests: ['guitar', 'concerts'],
        history: ['song1', 'song2']
    };
    res.json(userData);
});

app.get('/v2/user/:id', (req, res) => {
    // Simulate fetching user data from a database with a different structure
    const userData = {
        id: req.params.id,
        name: 'User V2',
        email: 'userv2@example.com',
        address: '123 Music Ave',
        phone: '123-456-7890'
    };
    res.json(userData);
});

app.listen(port, () => {
    console.log(`Service A listening at http://localhost:${port}`);
});
