import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="flex items-center gap-2 font-bold text-xl">

                    <p>Inverge</p>
                </Link>

                <ul>
                    <Link href="https://github.com/AdityaSrivastava185/Inverge">Github</Link>
                    {/* <Link href="/">Events</Link>
                    <Link href="/">Create Event</Link> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar