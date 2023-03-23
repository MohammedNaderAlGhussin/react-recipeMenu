import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Recipies from "./Components/Recipies";
import RecipeDetails from "./Pages/RecipeDetails";

function App() {
  return (
    <div className="App">
      <div className="my-10 px-10 w-fit mx-auto">
        <h1 className="capitalize md:text-center text-[26px] font-bold mb-2 text-[#c7bd84]">
          Welcome to the only recipies webiste you will ever need.
        </h1>
        <p className="text-[#333] md:text-lg md:text-start">
          Are you tired from fast food ? Are you looking for healty food
          recipies?
          <br /> you came to the right website, here you will find every recipe
          you have evered wished for.
        </p>
      </div>
      <Form />
      <Recipies />
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
