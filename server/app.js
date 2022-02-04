const express = require('express');
const gun = require('gun');

const app = express();

const PORT = process.env.PORT || 4040;

app.use(gun.serve);

const server = app.listen(PORT, () => {
    console.log(`Your website is listening at http://localhost:${PORT}`);
});

gun({ web: server });