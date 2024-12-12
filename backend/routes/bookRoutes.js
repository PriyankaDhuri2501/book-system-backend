

const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook } = require('../controller/bookController');

// Get all books


router.get('/check', getBooks);

// Add a new book
router.post('/', addBook);

// Delete a book
router.delete('/:id', deleteBook);

module.exports = router;
