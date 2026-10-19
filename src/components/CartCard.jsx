import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RemoveItem, IncreaseQty, DecreaseQty } from "../redux/cartSlice";

export default function CartCard({ id, name, image, price, qty }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={image} alt={name} />
      <div className="cart-item-info">
        <h3>{name}</h3>
        <div className="quantity-control compact" aria-label={`${name} quantity`}>
          <button type="button" aria-label={`Remove one ${name}`} onClick={() => qty > 1 ? dispatch(DecreaseQty(id)) : dispatch(RemoveItem(id))}><span aria-hidden="true">−</span></button>
          <span>{qty}</span>
          <button type="button" aria-label={`Add one ${name}`} onClick={() => dispatch(IncreaseQty(id))}><span aria-hidden="true">+</span></button>
        </div>
      </div>
      <div className="cart-item-end">
        <strong>₹{price * qty}</strong>
        <button className="delete-button" type="button" aria-label={`Remove ${name} from cart`} onClick={() => dispatch(RemoveItem(id))}><RiDeleteBin5Line /></button>
      </div>
    </article>
  );
}
