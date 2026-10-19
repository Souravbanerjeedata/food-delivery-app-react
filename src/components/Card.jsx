import { LuLeafyGreen } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";

export default function Card({ id, food_name, food_type, food_image, price }) {
  const dispatch = useDispatch();
  return (
    <div className="w-[170px] h-[220px] bg-white p-2 rounded-lg flex flex-col gap-1 shadow-lg transition-all border-2 border-transparent duration-300 hover:border-green-300 hover:scale-105">
      <div className="w-full h-[70%] overflow-hidden rounded-lg">
        <img src={food_image} className="object-cover" />
      </div>
      <div>
        <p className="text-[14px] font-semibold">{food_name}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-xs font-bold text-green-500">Rs {price}/-</p>
        <div className="flex justify-center items-center gap-1 text-green-500 text-xs font-semibold">
          {food_type === "veg" ? <LuLeafyGreen /> : <TbMeat />}
          <span>{food_type}</span>
        </div>
      </div>
      <button
        className="w-full p-2 rounded-lg bg-green-400 text-white hover:bg-green-500 transition-all duration-100 text-xs font-bold cursor-pointer"
        onClick={() =>
          dispatch(
            AddItem({
              id: id,
              name: food_name,
              image: food_image,
              price: price,
              qty: 1,
            }),
          )
        }
      >
        Add Item to cart
      </button>
    </div>
  );
}
