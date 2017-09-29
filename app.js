const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/', function(req, res) {
    res.write("Hello World!");
    res.end();
});

app.listen(PORT, function() {
    console.log(`Server started. PORT: ${PORT}`);
});
