const Gateway = require('express-gateway');
Gateway()
    .load(config)
    .run();