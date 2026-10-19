import { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext(null);

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const data = { input, setInput, foodList, setFoodList, showCart, setShowCart, showModal, setShowModal };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default UserContext;
