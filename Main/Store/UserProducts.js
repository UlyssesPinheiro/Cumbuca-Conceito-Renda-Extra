import { createSlice } from "@reduxjs/toolkit";

// {
//   "amount": 7,
//   "description": "string",
//   "id": 1,
//   "photos": Array [],
//   "price": 1,
//   "title": "string",
//   "totalValue": 1,
// }

function removeItem(oldState, id, oldOpenIds) {
  let newOpenIds = oldOpenIds;
  const newState = oldState.filter((item) => {
    if (item.id === id) {
      const openId = item.id;
      newOpenIds.push(openId);
      newOpenIds = oldOpenIds.sort((a, b) => a > b);
      return false;
    } else {
      return true;
    }
  });
  return [newState, newOpenIds];
}

const initialState = {
  products: [],
  openIds: [],
};

export const UserProducts = createSlice({
  name: "User Products",
  initialState,
  reducers: {
    addProduct(state, action) {
      let id;
      if (state.openIds.length > 0) {
        id = state.openIds.shift();
      } else {
        id = state.products.length + 1;
      }
      const productWithKey = { ...action.payload, id };
      state.products.push(productWithKey);
    },

    editProductAmount(state, action) {
      let itemToRemove = undefined;

      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.amount =
            Number(item.amount) + Number(action.payload.plusOrMinus);
          item.totalValue = item.amount * item.price;

          if (item.amount <= 0) {
            itemToRemove = item.id;
          }
          return item;
        } else {
          return item;
        }
      });

      if (itemToRemove) {
        const [newState, newOpenIds] = removeItem(
          state.products,
          itemToRemove,
          state.openIds
        );
        state.products = newState;
        state.openIds = newOpenIds;
      }

      if (state.products.length === 0) {
        state.openIds = [];
      }
    },

    removeProduct(state, action) {
      const [newState, newOpenIds] = removeItem(
        state.products,
        action.payload,
        state.openIds
      );
      state.products = newState;
      state.openIds = newOpenIds;

      if (state.products.length === 0) {
        state.openIds = [];
      }
    },

    clearProducts(state) {
      state = initialState;
    },
  },
});
