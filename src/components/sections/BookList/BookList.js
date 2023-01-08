import { useNavigate } from 'react-router-dom';

import { deleteBook, changeFinishedStatus, openBooksPage } from "../../../utils/http"

const BookList = (props) => {

    const navigate = useNavigate()

    const toggleFinished = id => {
        const chosenBook = props.books.find(book => book.id === id)
        chosenBook.finished = !chosenBook.finished
        changeFinishedStatus(id, chosenBook)
        navigate('/')
    }

    const handleBookRemove = id => {
        const filteredBooks = props.books.filter(book => book.id !== id)
        deleteBook(id)
        props.setBooks(filteredBooks)
    }

    const showBooksPage = id => {
        openBooksPage(id)
    }

    return (
        <main>
            <h2>Your books</h2>
            {props.books
                .filter(book => {
                    if (props.activeGenres.length === 0) return true;
                    return props.activeGenres.includes(book.category)
                })
                .map(book => (
                    <div
                        key={book.id}
                        className="book-container"
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            onClick={() => showBooksPage(book.id)}
                        />
                        <div
                            className="book-details"
                        >
                            <p className="book-title">{book.title}</p>
                            <div>
                                <p>By: <span className="book-author">{book.name} {book.surname}</span></p>
                                <p className="book-year">{book.year}</p>
                                <p className="book-cat">{book.category}</p>
                            </div>
                            <div
                                className="info-section"
                            >
                                {book.finished
                                    ?
                                    <button
                                        className="finished"
                                        onClick={() => toggleFinished(book.id)}
                                    >
                                        <span
                                            className="material-symbols-outlined">
                                            done
                                        </span>
                                    </button>
                                    :
                                    <button
                                        className="add-to-finished"
                                        onClick={() => toggleFinished(book.id)}
                                    >
                                        <span className="material-symbols-outlined">
                                            add_task
                                        </span>
                                    </button>
                                }
                                <button
                                    className="remove-button"
                                    onClick={() => handleBookRemove(book.id)}
                                >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

        </main>
    );
}

export default BookList;