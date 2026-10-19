import { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext(null);

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let data = {
    input,
    setInput,
    foodList,
    setFoodList,
    showCart,
    setShowCart,
    showModal,
    setShowModal,
  };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
}

export default UserContext;
