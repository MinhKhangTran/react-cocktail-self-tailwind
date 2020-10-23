import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <>
      <article className="bg-green-100 rounded-lg overflow-hidden hover:shadow-2xl ">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover object-top md:object-center"
        />
        <h2>{name}</h2>
        <p>{glass}</p>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="bg-green-500 px-2 py-1 rounded-md text-green-200 hover:bg-green-700 hover:text-green-100 transition transition-all duration-300 ease-in-out my-4 inline-block"
        >
          Details
        </Link>
      </article>
    </>
  );
};

export default Cocktail;
