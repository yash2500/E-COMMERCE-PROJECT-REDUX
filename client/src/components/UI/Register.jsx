import React, { useState } from "react";

import { REGISTER } from "../../action/constant";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    dispatch({
      type: REGISTER,
      payload: {
        id: new Date().getTime(),
        name,
        username,
        password,
      },
    });
    let path = "/login"
    navigate(path);
    console.warn(name, username, password, confirmPassword);
  };

  let navigate = useNavigate();
  const alreadyAccount = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <div className="vh-100">
    <form className="d-flex justify-content-center mt-5">
      <div className="card col-12 col-md-4 p-3">
        <h1 className="mx-auto">Register</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <input
          className="btn btn-primary btn-block mb-2"
          type="button"
          value="Register"
          onClick={register}
        />
        <input
          className="btn btn-success btn-block"
          type="button"
          value="Login"
          onClick={alreadyAccount}
        />
      </div>
    </form>
    </div>
  );
};

export default Register;
