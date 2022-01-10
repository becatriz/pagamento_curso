import { FiShoppingCart } from "react-icons/fi";
import styles from "./_styles.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <span>💻 Cursos show</span>
      <span>
        <FiShoppingCart size={22}  />
        <span>2</span>
      </span>
    </div>
  );
}
