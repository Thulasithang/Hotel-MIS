const initialState = {
  itemsInCart: [], // Instead of an array, you can use an object to store items with their quantities.
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedItems = [...state.itemsInCart];
        updatedItems[existingItemIndex].count += action.payload.count;
        return {
          ...state,
          itemsInCart: updatedItems,
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          itemsInCart: [...state.itemsInCart, action.payload],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
