import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProducts,
} from "../redux/productSlice";
import { add } from "../redux/cartSlice";

function ListProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  const cardProduct = useSelector((state) => state.cart);

  console.log(cardProduct);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-around">
          <Link to="add" className="btn btn-success">
            Add New Product
          </Link>
          <div>Total Cart : {cardProduct.length}</div>
        </div>
        <table className="table text-center mt-3">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">price</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`update/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => dispatch(deleteProducts(product.id))}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => dispatch(add(product))}
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListProduct;
