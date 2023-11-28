import './Nav.css'


const Nav = ({darkModeOn}) => {
    const change = () => {
        darkModeOn((darkmode) => !darkmode)
    }
    const moon = "Moon"
    return ( 
        <nav>
            <p><a href="">JS.</a></p>
            <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
                <div onClick={change}>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;