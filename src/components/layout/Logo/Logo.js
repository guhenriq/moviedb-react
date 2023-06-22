import { Link } from "react-router-dom"

export function Logo({ style }) {
    return (
        <Link to="/" className={style}>
            <img src="./images/logoipsum-288.svg" alt="logotipo"/>
        </Link>
    )
}