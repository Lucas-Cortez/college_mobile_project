import React, { createContext, useContext, useState } from "react";
import { Product } from "../@types/Farmer";

export type CartProduct = Product & { nickname: string; quantity: number };

export interface ICartContext {
  cart: CartProduct[];
  total: number;
  clearCart(): void;
  addCart(product: CartProduct): void;
  removeFromCart(id: CartProduct["_id"]): void;
  increaseAmount(id: CartProduct["_id"]): void;
  decreaseAmount(id: CartProduct["_id"]): void;
}

const insert = (arr: CartProduct[], index: number, newItem: CartProduct) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

const CartContext = createContext<ICartContext>(null!);

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ICartContext["cart"]>([]);
  const [total, setTotal] = useState<number>(0);

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const addCart = (product: CartProduct): void => {
    const isRepeat = cart.find((prod) => prod._id === product._id);
    if (!isRepeat) {
      setCart([...cart, product]);
      setTotal((prev) => prev + product.value);
    }
  };

  const removeFromCart = (id: CartProduct["_id"]) => {
    let data = [...cart];
    const index = cart.findIndex((product) => (product._id = id));
    if (index <= 0) {
      data.splice(index, 1);
      setCart(data);
    }
  };

  const increaseAmount = (id: CartProduct["_id"]) => {
    let data = [...cart];
    const index = data.findIndex((product) => product._id === id);
    data.splice(index, 1);
    const newData = { ...cart[index], quantity: cart[index].quantity + 1 };
    setTotal((prev) => prev + cart[index].value);
    setCart([...insert(data, index, newData)]);
  };

  const decreaseAmount = (id: CartProduct["_id"]) => {
    let data = [...cart];
    const index = data.findIndex((product) => product._id === id);
    data.splice(index, 1);
    // console.log(cart[index].quantity);
    setTotal((prev) => prev - cart[index].value);
    if (cart[index].quantity === 1) {
      setCart([...data]);
    } else {
      const newData = { ...cart[index], quantity: cart[index].quantity - 1 };
      setCart([...insert(data, index, newData)]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, total, clearCart, addCart, removeFromCart, increaseAmount, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
