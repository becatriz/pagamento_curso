import { FiShoppingCart } from "react-icons/fi";
import styles from "./_styles.module.scss";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { getStripeJs } from "../../services/stripe";

type idPriceParams = {
  price_id: string,
  quantity: 1
}

export function Header() {
  const {cartItem } =  useContext(CartContext);

  async function checkout() {
    const stripe = await getStripeJs();

    if(cartItem.length === 0){
      alert("Adicione ao menos 1 item ao carrinho")
      return
    }

  
    stripe?.redirectToCheckout({
      lineItems: formattedProductsForStripeRedirectCheckout(),
      mode: "payment",
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000",
    });
  }

  function formattedProductsForStripeRedirectCheckout() {
    const id_price = cartItem.map((value) => value.price);

    return id_price.reduce((acc: idPriceParams[], item: string) => {
      if (item) {
        return [...acc, {
          price: item,
          quantity: 1,
        }]
      }

      return acc;
    }, []);
  }

  return (
    <div className={styles.container} onClick={() =>  checkout()}>
      <span>💻 Cursos show</span>
      <span>
        <FiShoppingCart size={22}  />
        <span>{cartItem.length}</span>
      </span>
    </div>
  );
}
