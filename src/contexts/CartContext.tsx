import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface CartContextProviderprops {
  children: ReactNode;
}

interface ItemCartProps {
  price: string;
}

type CartContextData = {
  addItemInCart: (price: string) => void;
  cartItem: ItemCartProps[]
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartContextProviderprops) {
  const [cartItem, setCartItem] = useState<ItemCartProps[]>([]);

  function addItemInCart(price: string) {
    const updatedCart = [...cartItem];

    const courseIdPrice = {
      price,
    };

    updatedCart.push(courseIdPrice);
    setCartItem(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartItem,  addItemInCart }}>
      {children}
    </CartContext.Provider>
  );
}
