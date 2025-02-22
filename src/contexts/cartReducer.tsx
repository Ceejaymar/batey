import { createContext, useContext } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number };

const CartContext = createContext();

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
