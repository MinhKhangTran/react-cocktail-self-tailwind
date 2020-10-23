import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  // eigenen states
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const fetchData = async () => {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    if (data.drinks) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = data.drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients
      };
      setCocktail(newCocktail);
    } else {
      setCocktail(null);
    }
  };
  React.useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <div className="text-center mt-8 text-green-600 text-xl">
        <h1>Keine Cocktails gefunden</h1>
      </div>
    );
  } else {
    const {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients
    } = cocktail;
    return (
      <section className="mb-8">
        <div className="text-center my-4">
          <Link
            to="/"
            className="inline-block bg-green-500 px-2 py-1 rounded-md text-green-200 hover:bg-green-700 hover:text-green-100 transition transition-all duration-300 ease-in-out my-4 inline-block"
          >
            Zurück zu Homepage
          </Link>
          <h1 className="text-6xl">{name}</h1>
        </div>

        <div className="md:flex justify-around text-center md:w-2/3 mx-auto ">
          <div className="flex justify-center">
            <img src={image} alt={name} width="450" className="rounded-xl" />
          </div>
          <div className="flex flex-col items-start ml-6">
            <h1 className="mt-4">
              <span className="capitalize bg-green-600 text-green-100 px-2 py-1 rounded font-bold mr-4">
                Name:{" "}
              </span>
              {name}
            </h1>
            <h1 className="mt-4">
              <span className="capitalize bg-green-600 text-green-100 px-2 py-1 rounded font-bold mr-4">
                alkoholic:{" "}
              </span>
              {info}
            </h1>
            <h1 className="mt-4">
              <span className="capitalize bg-green-600 text-green-100 px-2 py-1 rounded font-bold mr-4">
                Category:{" "}
              </span>
              {category}
            </h1>
            <h1 className="mt-4">
              <span className="capitalize bg-green-600 text-green-100 px-2 py-1 rounded font-bold mr-4">
                glass:{" "}
              </span>
              {glass}
            </h1>
            <h1 className="mt-4">
              <span className="capitalize bg-green-600 text-green-100 px-2 py-1 rounded font-bold mr-4">
                instructions:{" "}
              </span>
              {instructions}
            </h1>
            <h1 className="mt-4">
              <span className="capitalize border-b-2 border-green-400 mr-16">
                ingredients :
              </span>

              {ingredients.map((item, index) => {
                return item ? (
                  <span
                    key={index}
                    className="flex text-green-800 font-semibold leading-8"
                  >
                    {" "}
                    > {item}
                  </span>
                ) : null;
              })}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
