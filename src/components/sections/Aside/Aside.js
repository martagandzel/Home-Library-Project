
import { getAvailableGenres } from "../../../utils/helpers";
import { showLibrary } from "../../../utils/http";

const Aside = (props) => {

    const showFinishedBooks = event => {
        if (event.target.checked) {
            const finishedBooks = props.books.filter(book => book.finished === true)
            props.setBooks(finishedBooks)

        } else {
            showLibrary()
                .then(data => props.setBooks(data))
                .catch(err => console.log(err))
        }
    }

    const showUnfinishedBooks = event => {
        if (event.target.checked) {
            const unfinishedBooks = props.books.filter(book => book.finished === false)
            props.setBooks(unfinishedBooks)

        } else {
            showLibrary()
                .then(data => props.setBooks(data))
                .catch(err => console.log(err))
        }
    }

    const handleCheckboxChange = genre => {
        const currentActiveGenres = props.activeGenres.includes(genre)
            ? props.activeGenres.filter(availableGenres => availableGenres !== genre)
            : props.activeGenres.concat(genre)
        props.setActiveGenres(currentActiveGenres)
    }

    return (
        <aside>
            <h2>Status</h2>
            <ul>
                <li>
                    <label className="filter">
                        <input
                            onClick={showUnfinishedBooks}
                            className="filter"
                            type="checkbox"
                        />
                        books to read
                    </label>
                </li>
                <li>
                    <label className="filter">
                        <input
                            onClick={showFinishedBooks}
                            className="filter"
                            type="checkbox"
                        />
                        books read
                    </label>
                </li>
            </ul>
            <h2>Genres</h2>
            <ul>
                {
                    getAvailableGenres(props.books)
                        .map(category => {
                            return (
                                <li key={category}>
                                    <label className="filter">
                                        <input
                                            className="filter"
                                            type="checkbox"
                                            onChange={() => handleCheckboxChange(category)}
                                        >
                                        </input>
                                        {category}
                                    </label>
                                </li>
                            )
                        })
                }
            </ul>

        </aside>
    );
}

export default Aside;