import './Footer.css'

const Footer = () => {

    const currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    return (
        <footer>
            <p>Your Home Library © {currentYear}</p>
        </footer>
    );
}

export default Footer;
