import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const container = React.useRef(null);
  // bei initial laden suchfeld fokusieren
  React.useEffect(() => {
    container.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(container.current.value);
  };
  return (
    <div className="grid place-items-center h-32">
      <form
        className="bg-green-100 inline-block p-5 rounded-lg flex flex-col w-11/12 md:w-2/3 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="text-green-600 font-mono text-xl">
          Suche dein Lieblingsgetränk
        </label>
        <input
          className="bg-gray-300 rounded pl-2 text-green-600 font-mono text-xl"
          onChange={searchCocktail}
          ref={container}
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
