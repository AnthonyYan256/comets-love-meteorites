import { Link } from 'react-router-dom';
import CometLogo from './assets/CML_Logo_Black.png'

function Header() {

    return(
        <header>
            <nav>
                <Link to="/"><img src={CometLogo} className='logo' alt="Comets Love Meteorites Logo"></img></Link>
                <ul className='firaFont'>
                    <Link to="/"><li className='navLinks'>home</li></Link>
                    <Link to="/learn-more"><li className='navLinks'>learn more</li></Link>
                    <Link to="/add-a-comet"><li className='navLinks'>add a comet</li></Link>
                    <Link to="/about"><li className='navLinks'>about</li></Link>
                </ul>
            </nav>
        </header>
    );

}

export default Header 