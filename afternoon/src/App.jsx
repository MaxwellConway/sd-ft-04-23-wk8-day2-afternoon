import { useState } from "react";

import "./App.css";
import FoodCard from "./components/FoodCard";

function App() {
  const foods = [
    {
      name: "Pizza",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
      description:
        "A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
      price: 10.0,
    },
    {
      name: "Burger",
      image:
        "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg",
      description:
        "A hamburger is a sandwich consisting of one or more cooked patties of ground beef, usually placed inside a sliced bun. The patty may be pan-fried, grilled, or flame-broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, ketchup, mayonnaise, mustard, and other condiments.",
      price: 5.0,
    },
    {
      name: "Falafel",
      image:
        "https://www.thespruceeats.com/thmb/j3o2767CVr8utwBHAGsrr_J4fQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-falafel-2355693-Hero_01-ba33428ae8704932ba4e43b526bb81ff.jpg",
      description:
        "Falafel is a Middle Eastern fritter made from ground chickpeas or fava beans, herbs, and spices. It is typically served in a pita bread with hummus, tahini, vegetables, and other toppings.",
      price: 4.0,
    },
    {
      name: "Sushi",
      image: "https://www.pbs.org/food/files/2012/09/Sushi-1-1.jpg",
      description:
        "Sushi is a Japanese dish of vinegared rice combined with other ingredients, such as seafood, vegetables, and sometimes tropical fruits. It can be served as a roll (maki), hand-pressed (nigiri), or in a bowl (donburi).",
      price: 15.0,
    },
    {
      name: "Ramen",
      image:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      description:
        "Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (叉焼, chāshū), nori (dried seaweed), menma, and scallions.",
      price: 10.0,
    },
  ];

  return (
    <>
      <div>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              <FoodCard
                key={index}
                name={food.name}
                image={food.image}
                description={food.description}
                price={food.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
