import { useContext, useEffect } from "react";
import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import { DataContext } from "../context/UserContext";
import { IoClose } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import CartCard from "../components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function Home() {
  const {
    foodList,
    setFoodList,
    input,
    showCart,
    setShowCart,
    showModal,
    setShowModal,
  } = useContext(DataContext);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = subtotal + deliveryFee + taxes;

  function filterFood(category) {
    const normalized = category.toLowerCase();
    setFoodList(
      normalized === "all"
        ? food_items
        : food_items.filter(
            (item) =>
              item.food_category === normalized ||
              item.food_categories?.includes(normalized),
          ),
    );
  }

  function placeOrder() {
    if (cartItems.length === 0) return;
    setShowModal(true);
  }

  useEffect(() => {
    if (!showModal) return undefined;
    const timer = setTimeout(() => {
      dispatch(clearCart());
      setShowModal(false);
      setShowCart(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showModal, dispatch, setShowCart]);

  return (
    <div className="site-shell" id="top">
      <Nav />
      <main className="page-content">
        {!input.trim() && (
          <section className="hero-section">
            <div className="hero-copy">
              <span className="eyebrow">
                <LuSparkles /> GOOD FOOD, GOOD MOOD
              </span>
              <h1>
                Your next favorite
                <br />
                <span>is on the menu.</span>
              </h1>
              <p>
                Freshly picked comfort food, from familiar favorites to flavors
                worth discovering.
              </p>
              <a className="hero-link" href="#menu">
                Explore the menu <LuArrowRight />
              </a>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-ring"></div>
              <img
                src={
                  food_items.find((item) => item.food_name === "Chicken Biryani")
                    ?.food_image
                }
                alt=""
              />
              <span className="hero-sticker">
                MADE
                <br />
                TO CRAVE
              </span>
              <span className="hero-note">
                A little joy
                <br />
                in every bite
              </span>
            </div>
            <div className="hero-footnote">
              <span>01</span> REAL FOOD, BIG FLAVOUR{" "}
              <span className="footnote-line"></span> {food_items.length}+ dishes
            </div>
          </section>
        )}

        {!input && (
          <section className="category-section" aria-label="Browse by category">
            <div className="section-heading compact-heading">
              <div>
                <span className="eyebrow">FIND YOUR CRAVING</span>
                <h2>Browse by mood</h2>
              </div>
            </div>
            <div className="category-list">
              {Categories.map((item) => (
                <button
                  className="category-card"
                  type="button"
                  key={item.id}
                  onClick={() => filterFood(item.name)}
                >
                  <span className="category-icon">{item.image}</span>
                  <span>{item.name.replaceAll("_", " ")}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MADE FOR YOUR APPETITE</span>
              <h2>{input ? "Search results" : "The good stuff"}</h2>
            </div>
            <span className="menu-count">
              {foodList.length} {foodList.length === 1 ? "dish" : "dishes"}
            </span>
          </div>
          {foodList.length > 0 ? (
            <div className="food-grid">
              {foodList.map((item) => {
                const cartItem = cartItems.find(
                  (entry) => entry.id === item.id,
                );
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    food_name={item.food_name}
                    food_category={item.food_category}
                    food_type={item.food_type}
                    food_image={item.food_image}
                    price={item.price}
                    cartItem={cartItem}
                  />
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <span>🥣</span>
              <h3>No dishes found</h3>
              <p>Try a different search and we’ll find something tasty.</p>
            </div>
          )}
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <img src="/logo.svg" alt="" />
            <span>
              quick<span>bite</span>
            </span>
          </div>
          <p>Good food makes an ordinary day feel a little better.</p>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} QuickBite</span>
            <span>
              ©{" "}
              <a
                href="https://x.com/souravdotcode/"
                target="_blank"
                rel="noreferrer"
              >
                Sourav Banerjee
              </a>
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </main>

      {showCart && (
        <button
          className="drawer-scrim"
          type="button"
          aria-label="Close cart"
          onClick={() => setShowCart(false)}
        />
      )}
      <aside
        className={`cart-drawer ${showCart ? "drawer-open" : ""}`}
        aria-label="Shopping cart"
        aria-hidden={!showCart}
      >
        <header className="cart-header">
          <div>
            <span className="eyebrow">YOUR GOODIES</span>
            <h2>
              Your cart{" "}
              <span>{cartItems.reduce((sum, item) => sum + item.qty, 0)}</span>
            </h2>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Close cart"
            onClick={() => setShowCart(false)}
          >
            <IoClose />
          </button>
        </header>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
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
            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>₹{deliveryFee}</strong>
              </div>
              <div>
                <span>Taxes</span>
                <strong>₹{taxes.toFixed(2)}</strong>
              </div>
              <div className="cart-total">
                <span>Total</span>
                <strong>₹{total.toFixed(2)}</strong>
              </div>
            </div>
            <button
              className="checkout-button"
              type="button"
              onClick={placeOrder}
            >
              Place order <LuArrowRight />
            </button>
            <p className="checkout-note">
              You’re one click away from something delicious.
            </p>
          </>
        ) : (
          <div className="empty-cart">
            <BsCartX />
            <h3>Your cart is taking a breather</h3>
            <p>Add a dish you love and it’ll show up here.</p>
            <button type="button" onClick={() => setShowCart(false)}>
              Explore the menu <LuArrowRight />
            </button>
          </div>
        )}
      </aside>

      {showModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-success-title"
        >
          <div className="modal-content success-modal">
            <div className="modal-icon">✓</div>
            <span className="eyebrow">ORDER CONFIRMED</span>
            <h2 id="order-success-title">It’s on its way!</h2>
            <p>Your order is placed. Thanks for choosing QuickBite.</p>
          </div>
        </div>
      )}
    </div>
  );
}


