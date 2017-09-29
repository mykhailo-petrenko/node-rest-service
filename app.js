const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.write("HELLO");
    res.end();
});

app.listen(PORT, function() {
    console.log('Server started');
});
