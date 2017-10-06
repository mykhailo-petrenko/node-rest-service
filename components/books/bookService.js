const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/bookAPI', {
    useMongoClient: true
});

