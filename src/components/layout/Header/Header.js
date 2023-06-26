import { Navbar } from "../Navbar/Navbar"
import { Search } from "../Search/Search"

export function Header() {
    return (
        <header className="fixed w-full top-0 z-10">
            <Navbar />
            <Search />
        </header>
    )
}