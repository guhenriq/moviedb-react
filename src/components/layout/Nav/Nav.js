import { Link } from "react-router-dom"

export function Nav() {
    return (
        <ul className="flex gap-5">
            <li>
                <Link to="/" className="text-white font-semibold hover:text-sky-500">Home</Link>             
            </li>
            <li>
                <Link to="/filmes" className="text-white font-semibold hover:text-sky-500">Filmes</Link>
            </li>
            <li>
                <Link to="/series" className="text-white font-semibold hover:text-sky-500">Series</Link>
            </li>
            <li>
                <Link to="/contato" className="text-white font-semibold hover:text-sky-500">Contato</Link>
            </li>
        </ul>
    )
}