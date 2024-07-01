import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  formData: {
    title: "",
    price: "",
  },
  isUpdate: {
    id: null,
    status: false
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setIsUpdate(state, action) {
      state.isUpdate = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    updateItem(state, action) {
      const { id, newData } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...newData };
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    }
  }
});

export const { setItems, setFormData, setIsUpdate, addItem, updateItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;