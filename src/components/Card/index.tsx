/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./_styles.module.scss";

interface Courses {
  productId: string;
  name: string;
  price: string;
  image?: string;
}

export function Card({ productId, name, price, image }: Courses) {
  const { addItemInCart } = useContext(CartContext);

  function handleAddItemCart(productId: string) {
    addItemInCart(productId);
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerCard}>{name}</div>
        <div className={styles.containerValues}>
          <img src={image} alt="imagem-curso"/>
          <p className={styles.containerValues__values}>{price}</p>
          <button
            onClick={() => handleAddItemCart(productId)}
            className={styles.containerValues__button}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
