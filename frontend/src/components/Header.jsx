import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center 
    sm:px-8 px-4 py-4">
        <Link to="/">
        <a class="navlogo">WCS-JOURNEY</a>
        </Link>

        <Link to="/create-post" className="font-inter mr-20 
        bg-transparent border text-white px-8 py-2 rounded-lg
        ">
          Create
        </Link>
    </header>
  )
}

export default Header;