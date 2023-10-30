import React, { createContext, useState } from "react";

interface CartItems {
  [key: number]: number;
}

export const ShopContext = createContext<CartItems | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Produtos: any[] = []; 

const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  for (let i = 1; i < Produtos.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ShopContextProvider: React.FC = () => {
  const [cardItems, setCardItems] = useState<CartItems | null>(getDefaultCart());

  const adicionarCarrinho = (itemId: number) => {
    setCardItems((prev) => ({ ...prev, [itemId]: (prev ? prev[itemId] : 0) + 1 }));
  }
  
  const removerCarrinho = (itemId: number) => {
    setCardItems((prev) => ({ ...prev, [itemId]: (prev ? prev[itemId] : 0) - 1 }));
  }

  const contextValue = {cardItems, adicionarCarrinho, removerCarrinho}

  return (
    <ShopContext.Provider value={contextValue}>
      {}
    </ShopContext.Provider>
  );
}
