import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './components/bookForm';
import BookList from './components/bookList';

const App = () => {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    
    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then((response) => setBooks(response.data))
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    
    const addBook = (newBook) => {
        axios.post('http://localhost:5000/api/books', newBook)
            .then((response) => {
                setBooks([...books, response.data]); // Update the state
                alert('Book added successfully!'); // Display a pop-up
            })
            .catch((error) => {
                console.log('Error adding book:', error);
                alert('Failed to add book. Please try again.');
            });
    };

    
    const deleteBook = (id) => {
        axios.delete(`http://localhost:5000/api/books/${id}`)
            .then(() => setBooks(books.filter((book) => book._id !== id)))
            .catch((error) => console.error('Error deleting book:', error));
    };

    
    const updateBook = (updatedBook) => {
        axios.put(`http://localhost:5000/api/books/${updatedBook._id}`, updatedBook)
            .then((response) => {
                setBooks(books.map((book) => 
                    book._id === response.data._id ? response.data : book
                ));
                setEditingBook(null);
            })
            .catch((error) => console.error('Error updating book:', error));
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 lg:p-10">
                <header className="text-center mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">Book Management System</h1>
                    <p className="text-gray-600">Manage your books effortlessly</p>
                </header>

                <main className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/3">
                        <BookForm
                            onAddBook={addBook}
                            onUpdateBook={updateBook}
                            editingBook={editingBook}
                            setEditingBook={setEditingBook}
                        />
                    </div>

                    <div className="w-full lg:w-2/3 overflow-y-auto h-[70vh]">
                        <BookList
                            books={books}
                            onDeleteBook={deleteBook}
                            onEditBook={setEditingBook}
                        />
                    </div>
                </main>

                <footer className="text-center mt-6 text-gray-500">
                    <p>&copy; 2024 Book Management System. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
