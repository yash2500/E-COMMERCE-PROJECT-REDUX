import Products from "../components/UI/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="card bg-dark text-white border-0">
        <img
          src="https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=2000"
          alt="Carousal"
          height="auto"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVES
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
