import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-center gap-x-8 bg-violet-600 text-white font-bold h-12">
          <li>
            <Link className="py-2 block" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="py-2 block" href="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className="py-2 block" href="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
