import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeItemFromCart, setIsOpen }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.overlayBox} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.cardHeader}>
          <h2 className="title three white">Carrinho de compras</h2>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeBtn}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </ul>
        </div>
        <div className={styles.totalContainer}>
          <span className="body600">Total</span>
          <span className="body600 grey300">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className={styles.removeBtnContainer}>
          <button
            onClick={() => {
              localStorage.removeItem("@CARTLIST");
              window.location.reload();
            }}
            className={`headline600 white ${styles.removeAllBtn}`}
          >
            Remover Todos
          </button>
        </div>
      </div>
    </div>
  );
};
