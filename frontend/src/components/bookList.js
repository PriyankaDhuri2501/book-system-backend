const BookList = ({ books, onDeleteBook, onEditBook }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Books List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book._id} className="flex justify-between items-center mb-4">
                        <div>
                            <strong>{book.title}</strong> by {book.author}
                        </div>
                        <div className="space-x-4">
                            <button
                                onClick={() => onEditBook(book)}
                                className="text-blue-600 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDeleteBook(book._id)}
                                className="text-red-600 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
