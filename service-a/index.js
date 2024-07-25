const express = require('express');
const app = express();
const port = 3001;

app.get('/v1/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'User V1', email: 'userv1@example.com' });
});

app.get('/v2/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'User V2', email: 'userv2@example.com' });
});

app.listen(port, () => {
    console.log(`Service A listening at http://localhost:${port}`);
});

