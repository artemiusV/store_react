import { fetchPizzas } from './asyncActions';
import { Status, PizzaSliceState, Pizza } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: PizzaSliceState= {
    items: [],
    status: Status.LOADING, // loading/success/error
  };

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
      setItems(state, action:PayloadAction<Pizza[]>) {
        state.items = action.payload;
      },
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(fetchPizzas.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
        })
        .addCase(fetchPizzas.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        })
        .addCase(fetchPizzas.rejected, (state) => {
          state.status = Status.ERROR;
          state.items = [];
        });
    },
  });
  

  
  export const { setItems } = pizzaSlice.actions;
  
  export default pizzaSlice.reducer;
  