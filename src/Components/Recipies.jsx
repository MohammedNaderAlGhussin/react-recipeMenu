import { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import Recipe from "./Recipe";

const Recipies = () => {
  const recipeContext = useContext(RecipeContext);
  return recipeContext.loading ? (
    <div className="box">
      <div className="b b1"></div>
      <div className="b b2"></div>
      <div className="b b3"></div>
      <div className="b b4 relative">
        <span className="font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></span>
      </div>
    </div>
  ) : (
    <div className="container flex items-center gap-10 justify-center flex-wrap mx-auto  mt-10 xl:max-w-[1280px] p-5">
      {recipeContext.recipies.map((recipe, index) => {
        return (
          <Recipe
            key={index}
            id={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            mealType={recipe.recipe.mealType}
            cuisineType={recipe.recipe.cuisineType}
          />
        );
      })}
    </div>
  );
};
export default Recipies;
