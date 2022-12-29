import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { LOGOUT } from "../../action/constant";
import { productSearch } from "../../action";

const Navbar = () => {
  const [value, setValue] = useState("");
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  let navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = () => {
    dispatch(productSearch(value));
  };

  const handleCart = () => {
    let path = "/cart";
    navigate(path);
  };

  const handleLogin = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            e-commerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <div className="input-group">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="form-control"
                  placeholder="Search Products..."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={onSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            <Button
              onClick={() => handleCart()}
              className="list-group-item d-flex justify-content-between align-items-center"
              color="dark"
              size="small"
              variant="outline"
            >
              {<AddShoppingCartIcon />} Cart
              <span className="badge badge-primary text-dark">
                ({result.length})
              </span>
            </Button>
            {user ? (
              <input
                onClick={() => {
                  dispatch({
                    type: LOGOUT,
                  });
                }}
                type="button"
                value="Logout"
              >
                Logout
              </input>
            ) : (
              <Button
                onClick={() => handleLogin()}
                size="small"
                color="info"
                variant="outline"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
