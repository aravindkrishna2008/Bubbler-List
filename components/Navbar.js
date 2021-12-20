import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <Image src="/logo.png" width={128*2} height={77*2}/> */}
        <h1>Bubble Listing</h1>
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/bubbles">
            <a>Bubble Listing</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
