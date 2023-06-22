import { Logo } from "../Logo/Logo"
import { Nav } from "../Nav/Nav"

export function Navbar() {
    return (
        <div className="w-full h-32 flex flex-col items-center lg:h-16 lg:flex lg:flex-row lg:place-content-around bg-[#255C99]">
            <Logo style={`text-sky-50 my-5`}/>
            <Nav />
        </div>
    )
}