import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./_styles.module.scss";

interface Courses {
  uuid: string;
  name: string;
  price: string;
}

export function Card({ uuid, name, price }: Courses) {
  const { addItemInCart } = useContext(CartContext);

  function handleAddItemCart(uuid: string) {
    addItemInCart(uuid);
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerCard}>{name}</div>
        <div className={styles.containerValues}>
          <p className={styles.containerValues__values}>{price}</p>
          <button
            onClick={() => handleAddItemCart(uuid)}
            className={styles.containerValues__button}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
