// src/stores/cart.js
import { atom } from 'nanostores';

export const cartStore = atom([]); // Initialize with an empty cart

export const addItem = (item) => {
  cartStore.setKey(
    'items', 
    (prevItems) => [...prevItems, item] 
  );
};

export const removeItem = (itemId) => {
  cartStore.setKey(
    'items', 
    (prevItems) => prevItems.filter((item) => item.id !== itemId)
  );
};

export const updateQuantity = (itemId, newQuantity) => {
  cartStore.setKey('items', (prevItems) => 
    prevItems.map((item) => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
  );
};

export const clearCart = () => {
  cartStore.set([]);
};

export const getCartTotal = () => {
  const items = cartStore.get().items;
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
