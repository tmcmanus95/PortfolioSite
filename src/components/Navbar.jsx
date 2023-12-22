import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between mx-5">
        <Link to="/">
          <h1 className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 ml-8 rounded-md">
            Home
          </h1>
        </Link>
        <ul className="flex items-centers">
          <li>
            <Link
              to="/aboutme"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white
              px-4 py-2 ml-8 rounded-md"
              href="#"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white
              px-4 py-2 ml-8 rounded-md"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
