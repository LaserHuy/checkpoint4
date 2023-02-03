import { useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

import "./SearchBar.css";

const SearchBar = ({ value, handleChange }) => {
    
    const ref = useRef(null);
    
    return (
      <div className="flex justify-center items-center " >
        <div className="max-w-6xl rounded-2xl overflow-hidden shadow-lg text-white 
        backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-40 border"
        >
          <div id="search-bar" className="relative flex items-center gap-2 mb-2">
            <div class="absolute flex justify-center right-3 text-lg">
                <FaSearch />
            </div>
            <input 
              autoComplete="off"
              placeholder="Search images"
              ref={ref}
              type="text" 
              value={value}
              onChange={handleChange}
              className="bg-transparent h-14 w-96 pr-8 pl-5 rounded z-0 focus:outline-none"
            />
          </div>
        </div>
      </div>
    )
  }

  export default SearchBar;