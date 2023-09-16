const initialState = {
  itemsInCart: [], // Instead of an array, you can use an object to store items with their quantities.
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.item.menuitemId
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
      case "DECREASE_ITEM_QUANTITY":
      // Find the item in the cart by its ID
      const decreasedItemIndex = state.itemsInCart.findIndex(
        (item) => item.id === action.payload
      );

      if (decreasedItemIndex !== -1) {
        const updatedItems = [...state.itemsInCart];
        const decreasedItem = updatedItems[decreasedItemIndex];

        // Decrease the item's quantity (assuming it's at least 1)
        if (decreasedItem.count > 1) {
          decreasedItem.count -= 1;
        } else {
          // If the count is 1, remove the item from the cart
          updatedItems.splice(decreasedItemIndex, 1);
        }

        return {
          ...state,
          itemsInCart: updatedItems,
        };
      }
      return state;

      case "INCREASE_ITEM_QUANTITY":
      // Find the item in the cart by its ID
      const increasedItemIndex = state.itemsInCart.findIndex(
        (item) => item.id === action.payload
      );

      if (increasedItemIndex !== -1) {
        const updatedItems = [...state.itemsInCart];
        const increasedItem = updatedItems[increasedItemIndex];

        // Increase the item's quantity
        increasedItem.count += 1;

        return {
          ...state,
          itemsInCart: updatedItems,
        };
      }
      return state;

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
