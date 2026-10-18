import { IoFastFoodOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiFoodTruck } from "react-icons/gi";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/UserContext";
import { food_items } from "../food";

export default function Nav() {
  const { input, setInput, foodList, setFoodList } = useContext(DataContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input),
    );
    setFoodList(newList);
  }, [input]);

  return (
    <div className="w-full h-16 flex justify-between items-center px-8">
      <div className="w-7 h-7 bg-white flex justify-center items-center rounded-md p-[1%] shadow-md">
        <IoFastFoodOutline className="w-7.5 h-7.5 text-green-500" />
      </div>
      <form
        className="w-[70%] h-8 bg-white flex items-center px-5 gap-5 rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <CiSearch className="text-green-500" />
        <input
          type="text"
          placeholder="Search your cravings..."
          className="w-[100%] outline-none text-[10px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-7 h-7 bg-white flex justify-center items-center rounded-md p-[1%] shadow-md relative">
        <span className="absolute top-0 right-1 text-green-500 font-bold text-[9px]">
          0
        </span>
        <GiFoodTruck className="w-7.5 h-7.5 text-green-500" />
      </div>
    </div>
  );
}
