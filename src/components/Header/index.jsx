import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsOpen }) => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <span onClick={() => setIsOpen(true)} className={styles.shoppingCart}>
          <MdShoppingCart color="grey" size={21} />
          <span>0</span>
        </span>
      </div>
    </header>
  );
};
