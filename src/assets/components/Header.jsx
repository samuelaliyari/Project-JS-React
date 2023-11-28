import Hero from "./header/Hero";
import Nav from "./header/Nav";

const Header = ({darkModeOn}) => {


    return ( 
        <>
            <Nav darkModeOn = {darkModeOn}/>
            <Hero />
        </>

    );
}

export default Header;