import React, { useState, useEffect } from 'react';

const BookForm = ({ onAddBook, onUpdateBook, editingBook, setEditingBook }) => {
    const [book, setBook] = useState({ title: '', author: '', description: '', publishedYear: '' });

    useEffect(() => {
        if (editingBook) {
            setBook(editingBook); // Pre-fill form if editing a book
        }
    }, [editingBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBook) {
            onUpdateBook(book); // Update the book
        } else {
            onAddBook(book); // Add new book
        }
        setBook({ title: '', author: '', description: '', publishedYear: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
                {editingBook ? 'Update Book' : 'Add New Book'}
            </h2>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={book.title}
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input
                    type="text"
                    value={book.author}
                    onChange={(e) => setBook({ ...book, author: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={book.description}
                    onChange={(e) => setBook({ ...book, description: e.target.value })}
                    className="w-full p-3 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Published Year</label>
                <input
                    type="number"
                    value={book.publishedYear}
                    onChange={(e) => setBook({ ...book, publishedYear: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">
                {editingBook ? 'Update Book' : 'Add Book'}
            </button>
        </form>
    );
};

export default BookForm;
