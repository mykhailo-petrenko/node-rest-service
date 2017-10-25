const {Router} = require('express');
const Book = require('../components/books/Book');

const bookRouter = Router();

bookRouter.route('/books')
    .get(function(req, res) {
        Book.find()
            .then(books => {
                res.json(books);
            }, err => {
                console.error(err);
            });
    });

module.exports = bookRouter;