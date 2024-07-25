const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const userProfile = {
    email: "user@example.com",
    address: "123 Music St",
    name: "John Doe",
    phone: "123-456-7890",
    favoriteGenres: ["rock", "jazz"],
    history: ["song1", "song2"]
};

app.get('/user-profile', (req, res) => {
    res.send(userProfile);
});

app.listen(port, () => {
    console.log(`Service A listening at http://localhost:${port}`);
});