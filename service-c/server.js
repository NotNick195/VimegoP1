const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

app.use(express.json());

app.get('/billing-info', (req, res) => {
    axios.get('http://localhost:3001/user-profile')
        .then(response => {
            const userProfile = response.data;
            const billingInfo = getBillingInfo(userProfile);
            res.send(billingInfo);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

function getBillingInfo(userProfile) {
    return {
        email: userProfile.email,
        address: userProfile.address,
        name: userProfile.name,
        phone: userProfile.phone
    };
}

app.listen(port, () => {
    console.log(`Service C listening at http://localhost:${port}`);
});
