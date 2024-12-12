const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook } = require('../controller/bookController');

router.get('/', getBooks);

router.post('/', addBook);

router.delete('/:id', deleteBook);

module.exports = router;
