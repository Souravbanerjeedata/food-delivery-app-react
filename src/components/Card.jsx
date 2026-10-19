import { LuLeaf, LuPlus, LuMinus } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { AddItem, IncreaseQty, DecreaseQty, RemoveItem } from "../redux/cartSlice";

export default function Card({ id, food_name, food_category, food_type, food_image, price, cartItem }) {
  const dispatch = useDispatch();
  return (
    <article className="food-card">
      <div className="food-photo-wrap">
        <img className="food-photo" src={food_image} alt={food_name} loading="lazy" />
        <span className={`food-tag ${food_type === "veg" ? "tag-veg" : "tag-nonveg"}`}>
          {food_type === "veg" ? <LuLeaf aria-hidden="true" /> : <TbMeat aria-hidden="true" />}
          {food_type === "veg" ? "Veg" : "Non-veg"}
        </span>
      </div>
      <div className="food-card-body">
        <div className="food-name-row">
          <h3>{food_name}</h3>
          <span className="food-category-label">{food_category.replaceAll("_", " ")}</span>
        </div>
        <div className="food-card-bottom">
          <p className="food-price">₹{price}</p>
          {!cartItem ? (
            <button className="add-button" type="button" onClick={() => dispatch(AddItem({ id, name: food_name, image: food_image, price, qty: 1 }))}>
              <LuPlus aria-hidden="true" /> Add
            </button>
          ) : (
            <div className="quantity-control" aria-label={`${food_name} quantity`}>
              <button type="button" aria-label={`Remove one ${food_name}`} onClick={() => cartItem.qty > 1 ? dispatch(DecreaseQty(id)) : dispatch(RemoveItem(id))}><LuMinus /></button>
              <span>{cartItem.qty}</span>
              <button type="button" aria-label={`Add one ${food_name}`} onClick={() => dispatch(IncreaseQty(id))}><LuPlus /></button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
