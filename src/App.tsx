import React from "react";
import axios from "axios";
import Recipe from "./Components/Recipe";
import { useState } from "react";
import "./App.css";

function App() {
  const API_ID = "6b24a020";
  const API_KEY = "170d84afdfdfdd416551b814674f7090";

  const [recipes, setRecipes] = useState([]);
  const [recipeQuery, setRecipeQuery] = useState(" ");

  const SearchRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeQuery}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setRecipes(response.data.hits);
    console.log(response);
    setRecipeQuery("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SearchRecipes();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1 onClick={SearchRecipes}>IngrediList</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Recipes"
          onChange={onChange}
          value={recipeQuery} //to clear input after search
        ></input>
        <input type="submit" value="search" />
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe recipes={recipes} />)}
      </form>
    </div>
  );
}

export default App;
