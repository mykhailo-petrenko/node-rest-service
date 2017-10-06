const {Router} = require('express');
const bookService = require('../components/books/bookService');

const bookRouter = Router();

bookRouter.route('/books')
    .get(function(req, res) {
        const responseJson = {
            ola: 'Hello Dolly'
        };

        res.json(responseJson);
    });

module.exports = bookRouter;