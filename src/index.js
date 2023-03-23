import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecipeContextProvider } from "./Context/RecipeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./Pages/RecipeDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </RecipeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
