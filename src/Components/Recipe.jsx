import { Link } from "react-router-dom";

const Recipe = ({ title, image, calories, mealType, cuisineType, id }) => {
  return (
    <div className="recipe flex flex-col gap-2 pb-4 shadow-xl duration-300  border-2 border-[#444939] w-fit bg-[#c7bd84] overflow-hidden rounded-[10px]">
      <img
        className="recipe-img "
        src={image}
        alt=""
      />
      <div className="font-bold text-[#333] mt-2">{title}</div>
      <div className="text-[#333]">
        <span className="font-bold">Calories: </span> {calories.toFixed(2)}
      </div>
      <div className="text-[#333]">
        <span className="font-bold ">Meal Type:</span> {mealType}
      </div>
      <div className="text-[#333]">
        <span className="font-bold ">Cuisine Type:</span> {cuisineType}
      </div>
      <Link
        to={`/recipe/${id}`}
        className="bg-[#444939] text-white rounded-[7px] mt-3 px-3 py-2 w-fit mx-auto"
      >
        Show More
      </Link>
    </div>
  );
};
export default Recipe;
