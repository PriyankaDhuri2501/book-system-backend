import React from 'react';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
                <div key={book._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-primary">{book.title}</h3>
                        <p className="text-md text-secondary">{book.author}</p>
                        <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Published: {book.publishedYear}</p>
                    </div>
                    <div className="flex justify-around pb-4">
                        <button
                            onClick={() => onEditBook(book)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDeleteBook(book._id)}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
