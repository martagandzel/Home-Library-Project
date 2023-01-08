import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddBookPage.css'
import SubPageTemplate from '../../templates/SubPageTemplate/SubPageTemplate';
import { addNewBook } from '../../../utils/http';

const genreOptions = [
    { id: 1, name: 'fiction' },
    { id: 2, name: 'mystery' },
    { id: 3, name: 'si-fi' },
    { id: 4, name: 'historical fiction' },
    { id: 5, name: 'fantasy' },
    { id: 6, name: 'cooking' },
    { id: 7, name: 'horror' },
    { id: 8, name: 'romance' },
]

const AddBookPage = () => {

    const [books, setBooks] = useState([])
    const [bookTitle, setBookTitle] = useState('')
    const [authorFirstName, setAuthorFirtsName] = useState('')
    const [authorLastName, setAuthorLastName] = useState('')
    const [bookYear, setBookYear] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [isError, setIsError] = useState(false)

    const initialGenre = genreOptions[0].name
    const [selectedGenre, setSelectedGenre] = useState(initialGenre)

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
    const readSelectedGenre = event => {
        setSelectedGenre(event.target.value)
    }
    const readBookCover = event => {
        setBookCover(event.target.value)
    }

    const handleAddNewBook = event => {
        event.preventDefault()

        const isValid = bookTitle.trim().length > 1 && authorFirstName.trim().length > 1 && authorLastName.trim().length > 1 && bookYear.trim().length > 1 && bookCover.trim().length > 1

        setIsError(bookTitle.trim().length < 1 || authorFirstName.trim().length < 1 || authorLastName.trim().length < 1 || bookYear.trim().length < 4 || bookCover.trim().length < 1)

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
            category: selectedGenre,
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
                <label>Choose a genre
                    <select
                        value={selectedGenre}
                        onChange={readSelectedGenre}
                    >

                        {
                            genreOptions.map(({ id, name }) => {
                                return (
                                    <option key={id} value={name}>{name}</option>
                                )
                            })
                        }

                    </select>
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
        </SubPageTemplate >
    );
}

export default AddBookPage;