import { Link } from "react-router-dom"; 
import logo from '../../imagens/logo.png';
import './Header.scss';

export default function Header() {
    return (
        <section className="caixaDaHeader">
            <img src={logo} alt="Logo da Starbucks" />
            
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Novidades">Novidades</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li> 
                </ul>
            </nav>
        </section>
    )
}