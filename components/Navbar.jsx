import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Website.png" height={60} width={60} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/listing">
        <a>All Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
