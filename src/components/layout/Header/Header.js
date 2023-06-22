import { Navbar } from "../Navbar/Navbar"
import { Search } from "../Search/Search"

export function Header() {
    return (
        <header>
            <Navbar />
            <Search />
        </header>
    )
}