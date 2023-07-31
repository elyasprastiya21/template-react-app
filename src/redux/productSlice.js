import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

export const postNewProducts = createAsyncThunk(
  "products/postNewProducts",
  async ({ title, price }) => {
    const response = await axios.post("http://localhost:5000/products", {
      title,
      price,
    });
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, title, price }) => {
    const response = await axios.patch(`http://localhost:5000/products/${id}`, {
      title,
      price,
    });
    return response.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
  }
);

const productsEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productsEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, actions) => {
      productsEntity.setAll(state, actions.payload);
    },
    [postNewProducts.fulfilled]: (state, actions) => {
      productsEntity.addOne(state, actions.payload);
    },
    [deleteProducts.fulfilled]: (state, actions) => {
      productsEntity.removeOne(state, actions.payload);
    },
    [updateProduct.fulfilled]: (state, actions) => {
      productsEntity.updateOne(state, {
        id: actions.payload.id,
        updates: actions.payload,
      });
    },
  },
});

export const productSelectors = productsEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
