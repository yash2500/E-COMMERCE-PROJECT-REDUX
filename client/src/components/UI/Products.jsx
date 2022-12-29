import React, { useEffect, useState } from "react";
import { addToCart, productList } from "../../action";
import { useDispatch, useSelector } from "react-redux";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const Loading = () => {
    return setLoading(<p>Loading...</p>);
  };

  const ShowProducts = () => {
    return (
      <>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
        >
          {data.map((product, index) => {
            return (
              <>
                <Grid item xs={2} sm={6} md={3}>
                  {/* <div className="col-sm-6 col-md-3"> */}
                  <div className="card p-4">
                    <NavLink to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img"
                        alt={product.title}
                        height="250px"
                        loading="lazy"
                      />
                    </NavLink>

                    <h4 className="card-title">
                      {product.title.substring(0, 16)}...
                    </h4>

                    <h6 className="card-subtitle text-muted">
                      {<AttachMoneyIcon />}
                      {product.price}
                    </h6>

                    <p className="card-text">
                      {product.description.substring(0, 26)}...
                    </p>

                    <button
                      className="btn btn-success btn-block"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
