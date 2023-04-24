import { Link } from "react-router-dom";

const Navbar: React.FC = () =>
{
    return (
        <nav className="navbar">
            <h2>
                <Link to={`/`}>Usuarios</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/novo`} className="new-btn">Novo Usuario</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;