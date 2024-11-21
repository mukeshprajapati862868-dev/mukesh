import{ useContext, useRef, useState } from "react";
// import SearchState from "../Context/SearchState";
import ContextSearch from "../Context/ContextSearh";

const Navbar = () => {
  let searchRef=useRef();

  let ctx=useContext(ContextSearch)
  console.log(ctx); //{search,setsearch finde the object}
  

  const handleSearch=()=>{
    // let value=searchRef.current.value()
    let value=searchRef.current.value;
    console.log(value);
    ctx.setSearch(value)
    
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 shadow-md fixed left-0 right-0 top-0 z-50 sm:flex-row flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-white">
              News App
            </a>
          </div>

          {/* Search Bar (hidden on small screens) */}
          <div className="hidden md:flex items-center w-1/2">
            <input ref={searchRef}
              type="text"
              placeholder="News search"
              className="w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSearch} className="bg-green-700  px-4 py-2 hover:bg-red-500 rounded-md">Search</button>
          </div>

          {/* Hamburger Menu (mobile view) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-4">
            <a onClick={()=> ctx.setSearch('crime')} href="#" className="text-white hover:text-blue-500">
              Crime
            </a>
            <a onClick={() => ctx.setSearch('finance')} href="#" className="text-white hover:text-blue-500">
              Finance
            </a>
            <a onClick={() => ctx.setSearch('sports')} href="#" className="text-white hover:text-blue-500">
              Sports
            </a>
            <a onClick={() => ctx.setSearch('entertainment')} href="#" className="text-white hover:text-blue-500">
              Entertainment
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a onClick={() => ctx.setSearch('crime')}href="#" className="block text-white hover:text-blue-500">
                Crime
              </a>
              <a onClick={() => ctx.setSearch('finance')} href="#" className="block text-white hover:text-blue-500">
                Finance
              </a>
              <a onClick={() => ctx.setSearch('sports')} href="#" className="block text-white hover:text-blue-500">
                Sports
              </a>
              <a onClick={() => ctx.setSearch('entertainment')} href="#" className="block text-white hover:text-blue-500">
                Entertainment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
