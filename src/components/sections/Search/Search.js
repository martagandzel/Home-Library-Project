import { useState } from "react";

import './Search.css'

const Search = (props) => {

    const [searchInput, setSearchInput] = useState('')

    const readSearchInput = event => {
        setSearchInput(event.target.value);
    }

    const handleSearch = event => {
        event.preventDefault()
        const matchingBooks = props.books.filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))
        props.setBooks(matchingBooks)
    }

    return (
        <section className="search-container">
            <form
                className="search-form"
                onKeyUp={handleSearch}
            >
                <label>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="search for a title"
                        className="search-input"
                        value={searchInput}
                        onChange={readSearchInput}
                    />
                </label>
            </form>
        </section>
    );
}

export default Search;