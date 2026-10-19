import { useDispatch } from "react-redux";
import Image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RemoveItem, IncreaseQty, DecreaseQty } from "../redux/cartSlice";

export default function CartCard({ id, name, image, price, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[80px] p-1 shadow-lg rounded-lg flex justify-between items-center">
      <div className="w-[60%] h-full flex gap-2 items-center justify-center">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-2 mt-3">
          <div className="text-xs font-semibold text-gray-600">{name}</div>
          <div className="w-[50px] h-[20px] bg-slate-400 flex rounded-md overflow-hidden text-xs shadow-lg font-semibold border border-green-400">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-200"
              onClick={
                qty > 1
                  ? () => dispatch(DecreaseQty(id))
                  : () => dispatch(RemoveItem(id))
              }
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-200"
              onClick={() => dispatch(IncreaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-3 mr-1">
        <span className="text-sm text-green-400 font-semibold mt-1">
          Rs {price * qty}/-
        </span>
        <RiDeleteBin5Line
          className="w-[15px] h-[15px] text-red-400 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
}
