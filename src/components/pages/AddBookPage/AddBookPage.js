import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddBookPage.css'
import { addNewBook } from '../../../utils/http';
import SubPageTemplate from '../../templates/SubPageTemplate/SubPageTemplate';

const AddBookPage = () => {

    const [books, setBooks] = useState([])
    const [bookTitle, setBookTitle] = useState('')
    const [authorFirstName, setAuthorFirtsName] = useState('')
    const [authorLastName, setAuthorLastName] = useState('')
    const [bookYear, setBookYear] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()


    const readBookTitle = event => {
        setBookTitle(event.target.value)
    }

    const readAuthorFirstName = event => {
        setAuthorFirtsName(event.target.value)
    }

    const readAuthorLastName = event => {
        setAuthorLastName(event.target.value)
    }

    const readBookYear = event => {
        setBookYear(event.target.value)
    }

    const readBookGenre = event => {
        setBookGenre(event.target.value)
    }

    const readBookCover = event => {
        setBookCover(event.target.value)
    }

    const handleAddNewBook = event => {
        event.preventDefault()

        const isValid = bookTitle.trim().length > 1 && authorFirstName.trim().length > 1 && authorLastName.trim().length > 1 && bookYear.trim().length > 1 && bookGenre.trim().length > 1 && bookCover.trim().length > 1

        setIsError(bookTitle.trim().length < 1 || authorFirstName.trim().length < 1 || authorLastName.trim().length < 1 || bookYear.trim().length < 4 || bookGenre.trim().length < 1 || bookCover.trim().length < 1)

        if (!isValid) {
            return
        }

        const customId = Date.now()

        const newBook = {
            id: customId,
            title: bookTitle,
            surname: authorLastName,
            name: authorFirstName,
            year: bookYear,
            category: bookGenre.toLowerCase(),
            image: bookCover,
            alt: `Cover for ${bookTitle}`,
            finished: false
        }

        const updatedBooks = books.concat(newBook)
        setBooks(updatedBooks)
        addNewBook(newBook)
        navigate('/')
    }

    return (
        <SubPageTemplate>


            <h2
                className='add-book-title'
            >
                Add a new book to your library
            </h2>

            <form
                className='add-book-form'
                onSubmit={handleAddNewBook}
            >

                <label>Title
                    <input
                        type="text"
                        placeholder='title'
                        value={bookTitle}
                        onChange={readBookTitle}
                    />
                </label>
                <label>Author’s first name
                    <input
                        type="text"
                        placeholder='first name'
                        value={authorFirstName}
                        onChange={readAuthorFirstName}
                    />
                </label>
                <label>Author’s last name
                    <input
                        type="text"
                        placeholder='last name'
                        value={authorLastName}
                        onChange={readAuthorLastName}
                    />
                </label>
                <label>Publication year
                    <input
                        type="text"
                        placeholder='year'
                        value={bookYear}
                        onChange={readBookYear}
                    />
                </label>
                <label>Genre
                    <input
                        type="text"
                        placeholder='genre'
                        value={bookGenre}
                        onChange={readBookGenre}
                    />
                </label>
                <label>Paste URL of book’s cover
                    <input
                        type="text"
                        placeholder='URL of the cover'
                        value={bookCover}
                        onChange={readBookCover}
                    />
                </label>

                {isError
                    ? <p className='warning'>Please fill out the missing information.</p>
                    : null
                }

                <button
                    type="submit"
                    className="add-book-button"
                >
                    <span className="material-symbols-outlined">
                        add_circle
                    </span>
                </button>
            </form>
        </SubPageTemplate>
    );
}

export default AddBookPage;