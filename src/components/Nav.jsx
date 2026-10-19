import { useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { GiFoodTruck } from "react-icons/gi";
import { DataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import brandMark from "../assets/quickbite-mark.svg";

export default function Nav() {
  const { input, setInput, setFoodList, setShowCart } = useContext(DataContext);
  const cartItems = useSelector((state) => state.cart);
  const cartTotal = cartItems.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    const query = input.trim().toLowerCase();
    setFoodList(food_items.filter((item) => item.food_name.toLowerCase().includes(query)));
  }, [input, setFoodList]);

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="QuickBite home">
        <img className="brand-mark" src={brandMark} alt="" />
        <span>quick<span className="brand-accent">bite</span></span>
      </a>
      <form className="search-box" onSubmit={(event) => event.preventDefault()} role="search">
        <CiSearch aria-hidden="true" />
        <input
          type="search"
          placeholder="Search dishes, cravings, comfort food..."
          aria-label="Search dishes"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <kbd>⌘ K</kbd>
      </form>
      <button className="cart-trigger" type="button" onClick={() => setShowCart(true)} aria-label={`Open cart, ${cartTotal} items`}>
        <GiFoodTruck aria-hidden="true" />
        <span>Cart</span>
        <span className="cart-count">{cartTotal > 99 ? "99+" : cartTotal}</span>
      </button>
    </header>
  );
}
