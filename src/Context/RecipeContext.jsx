import { createContext, useState } from "react";

export const RecipeContext = createContext({
  recipies: [],
  setRecipies: (value) => {},
  loading: false,
  setLoading: (value) => {},
});

export const RecipeContextProvider = ({ children }) => {
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <RecipeContext.Provider
      value={{
        recipies: recipies,
        setRecipies: setRecipies,
        loading: loading,
        setLoading: setLoading,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
