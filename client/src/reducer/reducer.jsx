import { ADD_TO_CART, DECREASE_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from "../action/constant"

export const cartData = (data = [], action) => {
  let doesItemExist;
  switch (action.type) {
    case ADD_TO_CART:
      doesItemExist = false;
      const newState = data.map((item) => {
        if (item.id === action.data.id) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newState;
      }
      return [...data, { ...action.data, quantity: 1 }];

    case REMOVE_FROM_CART:
      const remainingItem = data.filter((item) => item.id !== action.data);
      return [...remainingItem];

    case EMPTY_CART:
      data = [];
      return [...data];

    case DECREASE_QUANTITY:
      doesItemExist = false;
      const newData = data.filter((item) => {
        if (item.id === action.data.id || item.length > 0) {
          item.quantity -= 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newData;
      } 
      if(doesItemExist >= 0){
        return data
      }
      return [...data, { ...action.data, quantity: 1 }];

    default:
      return data;
  }
};
