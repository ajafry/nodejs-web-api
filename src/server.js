const express = require('express')
const internalAPI = require('./internal');
const externalAPI = require('./external');

const app = express();

const port = process.env.PORT || 8080;
const internalAPIRoot = '/int';
const externalAPIRoot = '/ext';

app.use(internalAPIRoot, internalAPI);
app.use(externalAPIRoot, externalAPI);

const server = app.listen(port, () => {
    console.log(`Express is running on port ${server.address().port}`);
});