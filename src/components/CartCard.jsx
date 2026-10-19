import Image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function CartCard() {
  return (
    <div className="w-full h-[70px] p-1 shadow-lg rounded-lg flex justify-between">
      <div className="w-[60%] h-full flex gap-2">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={Image1} className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3 py-1">
          <div className="text-xs font-semibold text-gray-600">Pancakes</div>
          <div className="w-[50px] h-[40px] bg-slate-400 flex rounded-md overflow-hidden text-xs shadow-lg font-semibold border border-green-400">
            <button className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              1
            </span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-3 mr-1">
        <span className="text-sm text-green-400 font-semibold mt-1">
          Rs 300/-
        </span>
        <RiDeleteBin5Line className="w-[15px] h-[15px] text-red-400 cursor-pointer" />
      </div>
    </div>
  );
}
