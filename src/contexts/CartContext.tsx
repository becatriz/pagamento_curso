import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface CartContextProviderprops {
  children: ReactNode;
}

interface ItemCartProps {
  uuid: string;
}

type CartContextData = {
  addItemInCart: (uuid: string) => void;
  cartItem: ItemCartProps[]
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartContextProviderprops) {
  const [cartItem, setCartItem] = useState<ItemCartProps[]>([]);

  function addItemInCart(uuid: string) {
    const updatedCart = [...cartItem];

    const courseUuid = {
      uuid,
    };

    updatedCart.push(courseUuid);
    setCartItem(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartItem,  addItemInCart }}>
      {children}
    </CartContext.Provider>
  );
}
