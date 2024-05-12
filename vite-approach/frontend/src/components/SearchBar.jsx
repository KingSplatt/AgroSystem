import React from "react";

const SearchBar = () => {
  return (
    <div className="flex-grow">
      <form className="flex h-full p-2 mx-10" action="/search" method="GET">
        <input
          type="text"
          name="query"
          placeholder="Busca un producto..."
          className="input p-2 flex-grow rounded-l"
        />
        <button
          type="submit"
          className="button transition-colors duration-300 bg-clightgreen-600 hover:bg-clightgreen-700 text-white px-4 py-2  rounded-r"
        >
          <img src="src/assets/search.png" className="w-6 h-6" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
