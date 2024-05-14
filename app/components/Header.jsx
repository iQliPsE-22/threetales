import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black min-h-16 text-white flex flex-row items-center justify-between w-screen p-6">
      <h1 className="sofia-font">Three Tales</h1>
      <ul className="flex flex-row justify-between gap-20">
        <Link href="/">
          <li>Home</li>
        </Link>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Header;
