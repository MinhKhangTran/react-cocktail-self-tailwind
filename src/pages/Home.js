import React from "react";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";
import CocktailList from "../components/CocktailList";

export default function Home() {
  return (
    <>
      <SearchForm />
      <CocktailList />
    </>
  );
}
