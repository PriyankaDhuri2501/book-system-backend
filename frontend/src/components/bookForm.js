import React, { useState, useEffect } from 'react';

const BookForm = ({ onAddBook, onUpdateBook, editingBook, setEditingBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publishedYear, setPublishedYear] = useState('');

    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title);
            setAuthor(editingBook.author);
            setDescription(editingBook.description);
            setPublishedYear(editingBook.publishedYear);
        }
    }, [editingBook]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookData = { title, author, description, publishedYear };

        if (editingBook) {
            onUpdateBook({ ...bookData, _id: editingBook._id });
        } else {
            onAddBook(bookData);
        }

        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setDescription('');
        setPublishedYear('');
        setEditingBook(null);
    };

    return (
        <div className="bg-white shadow-custom rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
                {editingBook ? 'Edit Book' : 'Add a New Book'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="number"
                    placeholder="Published Year"
                    value={publishedYear}
                    onChange={(e) => setPublishedYear(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="w-full p-3 bg-primary text-white rounded-md hover:bg-secondary transition duration-200">
                    {editingBook ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default BookForm;
