import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addItemToCartList }) => {
  return (
    <ul className={styles.productListContainer}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addItemToCartList={addItemToCartList}
        />
      ))}
    </ul>
  );
};
