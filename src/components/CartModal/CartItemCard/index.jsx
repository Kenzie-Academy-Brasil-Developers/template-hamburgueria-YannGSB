import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeItemFromCart }) => {
  const { id, img, name, price } = product;

  return (
    <li className={styles.itemContainer}>
      <div className={styles.imgBackground}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.productInfoContainer}>
        <h3>{name}</h3>
        <p className="body600 primary">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <span
        className="deleteBtn"
        aria-label="delete"
        title="Remover item"
        onClick={() => removeItemFromCart(id)}
      >
        <MdDelete size={21} color="grey" />
      </span>
    </li>
  );
};
