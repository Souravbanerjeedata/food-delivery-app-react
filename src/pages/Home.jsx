import { useContext, useState } from "react";
import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import { DataContext } from "../context/UserContext";
import { IoClose } from "react-icons/io5";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";

export default function Home() {
  const { foodList, setFoodList, input, showCart, setShowCart } =
    useContext(DataContext);
  const cartItems = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = subtotal + deliveryFee + taxes;

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
    <div className="min-h-screen w-full bg-slate-200">
      <Nav />
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full mt-14">
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

      <div
        className={`w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 ${input && "mt-14"}`}
      >
        {foodList.map((item) => {
          let isInCart = cartItems.find((cartItem) => cartItem.id === item.id);
          return (
            <Card
              key={item.id}
              id={item.id}
              food_name={item.food_name}
              food_type={item.food_type}
              food_image={item.food_image}
              price={item.price}
              cartItem={isInCart}
            />
          );
        })}
      </div>

      <div
        className={`w-[60vh] h-[100%] fixed top-0 right-0 bg-white shadow-2xl p-2 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} flex flex-col justify-start items-center overflow-auto z-20`}
      >
        <header className="w-full flex items-center justify-between">
          <span className="text-green-400 text-[15px] font-semibold">
            Your order
          </span>
          <IoClose
            className="w-[25px] h-[25px] text-green-400 text-[15px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div className="w-full mt-4 flex flex-col gap-2">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              image={item.image}
              qty={item.qty}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
        <div className="w-full border-t-2 border-gray-400 mt-5 flex flex-col gap-1 p-8">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-600 font-semibold">
              Subtotal
            </span>
            <span className="text-green-400 font-semibold text-sm">
              Rs {subtotal}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-600 font-semibold">
              Delivery Fee
            </span>
            <span className="text-green-400 font-semibold text-sm">
              Rs {deliveryFee}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-600 font-semibold">Taxes</span>
            <span className="text-green-400 font-semibold text-sm">
              Rs {taxes.toFixed(2)}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center border-t mt-1">
            <span className="text-md text-gray-600 font-bold">Total</span>
            <span className="text-green-400 font-bold text-md">
              Rs {total.toFixed(2)}/-
            </span>
          </div>
        </div>
        <button className="w-[80%] p-2 rounded-lg bg-green-400 text-white hover:bg-green-500 transition-all duration-100 text-xs font-bold cursor-pointer mt-2">
          Place Order
        </button>
      </div>
    </div>
  );
}
