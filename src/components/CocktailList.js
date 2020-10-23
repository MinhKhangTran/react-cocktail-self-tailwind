import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="text-center mt-8 text-green-600 text-xl">
        <h1>Kein Cocktail mit diesem Suchkriterium</h1>
      </div>
    );
  }

  return (
    <div className="text-center mt-8">
      <h2 className="text-green-700 text-2xl font-bold font-mono">Cocktails</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-4 w-11/12 mx-auto my-4 ">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
