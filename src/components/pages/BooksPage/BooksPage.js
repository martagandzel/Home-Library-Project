import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SubPageTemplate from "../../templates/SubPageTemplate/SubPageTemplate";
import './BooksPage.css'
import { getBookById } from "../../../utils/http";

const BooksPage = (props) => {

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [alt, setAlt] = useState('')
    const [image, setImage] = useState('')
    const [finished, setFinished] = useState(false)

    const params = useParams()

    useEffect(() => {

        getBookById(params.bookId)
            .then(data => {
                setTitle(data.title)
                setName(data.name)
                setSurname(data.surname)
                setGenre(data.category)
                setYear(data.year)
                setAlt(data.alt)
                setImage(data.image)
                setFinished(data.finished)
            })
    })

    return (
        <SubPageTemplate>
            <section
                className="book-page"
            >
                <img src={image} alt={alt} />
                <div className="backcover-info">
                    <p>Amet, officia est cumque quo quae porro laudantium adipisci animi cupiditate quia voluptatem neque delectus quam! Labore debitis sunt animi sapiente iusto itaque a? Iure adipisci illum odit, harum dolorum doloribus labore aut nam expedita officiis odio libero ipsam, iusto eum, repudiandae alias voluptas?</p>
                    <p>Cum, quisquam eos. Laudantium impedit assumenda placeat, incidunt neque laborum magnam modi distinctio explicabo quidem nisi adipisci reprehenderit cumque sed cupiditate sequi iure, dolore eveniet laboriosam corporis. Minima cumque pariatur eum reprehenderit ex in aut fuga aspernatur nemo!</p>
                    <p>Aspernatur sunt magni quod omnis ipsam dicta? Totam ipsa incidunt fuga. Laboriosam est, laborum natus reiciendis commodi minima nemo aperiam. Unde cumque ipsum harum nobis quam! Consectetur blanditiis, nam ex aperiam commodi id non recusandae deleniti distinctio earum voluptatum laboriosam.</p>
                </div>
                <div className="book-info">
                    <div className="book-page-title-section">
                        <h2 className="book-page-title">{title}</h2>
                        {finished
                            ?
                            <button
                                className="book-page-button finished"
                            >
                                <span
                                    className="material-symbols-outlined">
                                    done
                                </span>
                            </button>
                            :
                            <button
                                className="book-page-button add-to-finished"
                            >
                                <span className="material-symbols-outlined">
                                    add_task
                                </span>
                            </button>
                        }

                    </div>

                    <div className="book-page-author">
                        <p>By: <span>{name} {surname}</span></p>
                        <p className="book-page-year">Published: {year}</p>
                        <p className="book-page-cat">Genre: {genre}</p>
                    </div>
                </div>

            </section>
        </SubPageTemplate>
    );
}

export default BooksPage;