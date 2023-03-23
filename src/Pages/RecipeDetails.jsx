import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  return <div>Recip id number : {recipeId}</div>;
};
export default RecipeDetails;
