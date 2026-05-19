import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    addedItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.addedItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const filteredItems = state.addedItems.filter((item) => {
        return item.id != action.payload.id;
      });
    },
    clearCart: (state, action) => {
      state.addedItems.length = 0;
    },
  },
});

const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export { addItem, removeItem, clearCart };
