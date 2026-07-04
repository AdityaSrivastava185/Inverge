import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="border-b border-[#30302E] rounded-none">
        <nav>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <p>Inverge</p>
          </Link>
          <ul>
            {/* <Link href="https://github.com/AdityaSrivastava185/Inverge">Github</Link> */}
            <Link href="/">Events</Link>
            <Link href="/create-event">Create Event</Link>
            {/* <Link href="/">Update Event</Link> */}
          </ul>
        </nav>
      </header>
      <header className="border-b border-[#30302E] rounded-none">
        <nav className="w-full mx-auto">
            <h2 className="text-muted-foreground">@Inverge</h2>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
