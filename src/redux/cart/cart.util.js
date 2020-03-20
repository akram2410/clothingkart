import CartItem from "../../components/cart-item/cart-item.component";

export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );
  if (existingCardItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );
  if (existingCardItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
