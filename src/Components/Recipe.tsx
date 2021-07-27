import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Irecipe } from "../types";

const Recipe = (props: {
  recipe: Irecipe;
  shoppingList: string[];
  setShoppingList: Dispatch<SetStateAction<string[]>>;
}) => {
  const { recipe, shoppingList, setShoppingList } = props;
  const label = recipe.recipe.label;
  const image = recipe.recipe.image;

  const updateShoppingList = () => {
    setShoppingList((prevState) => [...prevState, label]);
  };

  return (
    <div className="recipe">
      <img src={image} alt={label} />
      <p>{label}</p>
      <button
        type="button"
        id="add-ingredient"
        onClick={updateShoppingList}
      ></button>
      <div> {shoppingList}</div>
    </div>
  );
};

export default Recipe;
