import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { addToCart } from "../../action";
import { useDispatch } from "react-redux";

const proUrl = `http://localhost:3500/products`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  let navigate = useNavigate();

  const handleCart = () => {
    let path = "/cart";
    navigate(path);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${proUrl}/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [id]);

  const Loading = () => {
    setLoading(true);
  };

  const ShowProduct = () => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} align="center">
            <img src={product.image} alt={product.title} width="300" />
          </Grid>

          <Grid item xs={12} md={6}>
            <h5>
              {product.category}
            </h5>

            <p className="h2">
              {product.title}
            </p>

            <p className="h5">
              Rating {product.rating && product.rating.rate}
              {<StarIcon />}
            </p>

            <p className="h3">
              {<AttachMoneyIcon />} {product.price}
            </p>

            <p className="h5">
              {product.description}
            </p>

            <button className="btn btn-success me-2" onClick={() => addProduct(product)}>  
              Add To Cart
            </button>

            <button className="btn btn-warning" onClick={handleCart}>  
              Go To Cart
            </button>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
