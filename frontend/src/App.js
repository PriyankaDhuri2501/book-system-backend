import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './components/bookForm';
import BookList from './components/bookList';

const App = () => {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null); // Track the book being edited

    // Fetch books from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then((response) => setBooks(response.data))
            .catch((error) => console.log('Error fetching books:', error));
    }, []);

    // Add a new book
    const addBook = (newBook) => {
        axios.post('http://localhost:5000/api/books', newBook)
            .then((response) => setBooks([...books, response.data]))
            .catch((error) => console.log('Error adding book:', error));
    };

    // Delete a book
    const deleteBook = (id) => {
        axios.delete(`http://localhost:5000/api/books/${id}`)
            .then(() => setBooks(books.filter((book) => book._id !== id)))
            .catch((error) => console.log('Error deleting book:', error));
    };

    // Update a book
    const updateBook = (updatedBook) => {
        axios.put(`http://localhost:5000/api/books/${updatedBook._id}`, updatedBook)
            .then((response) => {
                setBooks(books.map((book) =>
                    book._id === response.data._id ? response.data : book
                ));
                setEditingBook(null); // Exit edit mode
            })
            .catch((error) => console.log('Error updating book:', error));
    };

    return (
        <div className="bg-lightGray min-h-screen flex justify-center items-center overflow-auto">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary">Book Management System</h1>
                    <p className="text-lg text-darkGray mt-2">Add, manage, and track your books</p>
                </header>

                <main className="h-[80vh] overflow-y-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/3">
                            <BookForm
                                onAddBook={addBook}
                                onUpdateBook={updateBook}
                                editingBook={editingBook}
                                setEditingBook={setEditingBook}
                            />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <BookList
                                books={books}
                                onDeleteBook={deleteBook}
                                onEditBook={setEditingBook}
                            />
                        </div>
                    </div>
                </main>

                <footer className="text-center text-darkGray mt-8">
                    <p>&copy; 2024 Book Management System. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
