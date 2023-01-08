import { useState, useEffect } from "react";

import './AuthorsPage.css'
import SubPageTemplate from "../../templates/SubPageTemplate/SubPageTemplate";
import { showLibrary } from "../../../utils/http";
import { getAllAuthors } from "../../../utils/helpers"

const AuthorsPage = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        showLibrary()
            .then(data => setBooks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <SubPageTemplate>
            <h2
                className="all-authors-title"
            >
                All Authors
            </h2>
            <section
                className="authors-container"
            >
                {
                    getAllAuthors(books).map(author => (
                        <section
                            key={author}
                            className="author-section"
                        >
                            <h3>{author};</h3>

                        </section>
                    ))
                }
            </section>
        </SubPageTemplate>
    );
}

export default AuthorsPage;