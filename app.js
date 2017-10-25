const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/bookAPI', {
    useMongoClient: true
});

const bookRouter = require('./routers/bookRouter');

const PORT = process.env.PORT || 80;

const app = express();

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.write("Hello World!");
    res.end();
});

app.listen(PORT, function() {
    console.log(`Server started. PORT: ${PORT}`);
});
