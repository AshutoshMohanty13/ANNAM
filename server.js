const express = require('express');

const app = express();

const server = app.listen(6991, () => {
    console.log("listening on port %s-", server.address().port);
        });