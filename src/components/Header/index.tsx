import { FiShoppingCart } from "react-icons/fi";
import styles from "./_styles.module.scss";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Header() {
  const {cartItem } =  useContext(CartContext);

  return (
    <div className={styles.container}>
      <span>💻 Cursos show</span>
      <span>
        <FiShoppingCart size={22}  />
        <span>{cartItem.length}</span>
      </span>
    </div>
  );
}
