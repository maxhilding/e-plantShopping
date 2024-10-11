import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0,
},
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        }
        else {
            state.items.push({name, image, cost, quantity: 1});
        }
        state.totalItems += 1;
    },
    removeItem: (state, action) => {
      const name = action.payload
      const plant = state.items.find(item => item.name === name);
      state.items = state.items.filter(item => item.name !== name);
      state.totalItems -= plant.quantity;
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
        
        state.totalItems += Number(quantity) - Number(itemToUpdate.quantity);
           
            
        itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
