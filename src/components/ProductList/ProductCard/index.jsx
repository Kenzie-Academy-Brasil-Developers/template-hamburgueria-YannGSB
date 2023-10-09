import styles from "./style.module.scss";

export const ProductCard = ({ product, addItemToCartList }) => {
  return (
    <li className={styles.productCard}>
      <div className={styles.productCardHeader}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.productCardMain}>
        <h3 className="title three grey600">{product.name}</h3>
        <span className="body grey300">{product.category}</span>
        <span className="body600 primary">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            addItemToCartList(product);
          }}
          className="btn-primary"
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
