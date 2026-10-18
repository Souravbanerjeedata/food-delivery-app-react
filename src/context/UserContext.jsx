import { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext(null);

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState(food_items);
  let data = { input, setInput, foodList, setFoodList };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
}

export default UserContext;
