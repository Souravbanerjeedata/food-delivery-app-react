import { useContext, useState } from "react";
import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import { DataContext } from "../context/UserContext";

export default function Home() {
  const { foodList, setFoodList, input } = useContext(DataContext);

  function filterFood(category) {
    let loweredcasedCategory = category.toLowerCase();
    if (loweredcasedCategory === "all") {
      setFoodList(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === loweredcasedCategory,
      );
      setFoodList(newList);
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-200 px-2">
      <Nav />
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => (
            <div
              key={item.id}
              className="gap-2 w-[80px] h-[90px] bg-white flex flex-col items-center p-5 justify-center text-[8px] font-bold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filterFood(item.name)}
            >
              {item.image}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {foodList.map((item) => (
          <Card
            key={item.id}
            food_name={item.food_name}
            food_type={item.food_type}
            food_image={item.food_image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
