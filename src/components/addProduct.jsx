import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewProducts } from "../features/productSlice";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewProduct = async (e) => {
    e.preventDefault();
    await dispatch(postNewProducts({ title, price }));
    navigate("/");
  };

  return (
    <>
      <div className="card p-3 mt-5">
        <h4>Add New Products</h4>
        <form onSubmit={addNewProduct}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
