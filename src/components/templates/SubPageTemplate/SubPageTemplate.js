import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";
import Nav from "../../sections/Nav/Nav";

const SubPageTemplate = (props) => {
    return (
        <>
            <Header />
            <Nav />

            {props.children}
            <Footer />
        </>
    );
}

export default SubPageTemplate;