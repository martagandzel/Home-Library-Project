import { useEffect, useState } from 'react';

import './HomePage.css'
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { showLibrary } from '../../../utils/http';
import Aside from '../../sections/Aside/Aside';
import BookList from '../../sections/BookList/BookList';

const HomePage = () => {

    const [books, setBooks] = useState([])
    const [activeGenres, setActiveGenres] = useState([])

    useEffect(() => {
        showLibrary()
            .then(data => setBooks(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <MainTemplate
            books={books}
            setBooks={setBooks}
        >
            <section className='main-container'>

                <Aside
                    books={books}
                    setBooks={setBooks}
                    activeGenres={activeGenres}
                    setActiveGenres={setActiveGenres}
                />


                <BookList
                    books={books}
                    setBooks={setBooks}
                    activeGenres={activeGenres}
                    setActiveGenres={setActiveGenres}
                />

            </section>

        </MainTemplate>
    );
}

export default HomePage;