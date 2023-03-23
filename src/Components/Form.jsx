import axios from "axios";
import { useContext, useRef, useState } from "react";
import { RecipeContext } from "../Context/RecipeContext";

const Form = () => {
  const appId = process.env.REACT_APP_ID;
  const appKey = process.env.REACT_APP_KEY;

  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const chooceRecipe = (recipe) => {
    setQuery(recipe);
  };

  const recipeContext = useContext(RecipeContext);

  const getRecipies = async () => {
    try {
      recipeContext.setLoading(true);
      const recipiesRes = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`
      );
      recipeContext.setRecipies(recipiesRes.data.hits);
      recipeContext.setLoading(false);
      console.log(recipiesRes.data.hits);
      console.log(recipeContext.recipies);
    } catch (error) {
      recipeContext.setLoading(false);
      return error;
    }
  };
  console.log(recipeContext.recipies);
  console.log(query);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormDisabled) {
      getRecipies();
      clearForm();
    }
  };

  const isFormDisabled = () => (inputRef.current.value === "" ? false : true);
  const clearForm = () => (inputRef.current.value = "");

  return (
    <div className=" container mx-auto xl:max-w-[1220px] flex flex-col items-center ">
      <form
        onSubmit={onSubmitHandler}
        className="border-2 border-[#444939] w-fit"
      >
        <input
          className="py-2  pl-2 w-[300px] md:w-[500px] focus:outline-none"
          type="text"
          placeholder="Ex: banana, salad, chicken"
          onChange={(e) => chooceRecipe(e.target.value)}
          ref={inputRef}
        />
        <button className="bg-[#444939]  text-white px-3 py-2" type="submit">
          Serach
        </button>
      </form>
    </div>
  );
};
export default Form;
