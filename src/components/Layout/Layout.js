import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;