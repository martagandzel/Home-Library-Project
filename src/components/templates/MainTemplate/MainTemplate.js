import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";
import Nav from "../../sections/Nav/Nav";
import Search from '../../sections/Search/Search'

import './MainTemplate.css'

const MainTemplate = (props) => {
    return (
        <>
            <Header />
            <section className="nav-bar">
                <Nav />
                <Search
                    books={props.books}
                    setBooks={props.setBooks}
                />
            </section>
            {props.children}
            <Footer />
        </>
    );
}

export default MainTemplate;