import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LOGIN } from "../../action/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  const login = () => {
    console.warn("USERS : ", users.userData.users);
    if (users.userData.username === username && users.userData.password === password) {
      // dispatch({
      //   type: LOGIN,
      //   users,
      // });
      // const combineArray = [];
      // const pushData = combineArray.push(cartData, users)
      // console.warn("PUSH DATA",pushData);
      console.warn("USER DATA",username, password);
      alert("Wrong username or wrong password");
      let path = "/";
      navigate(path);
    }
    else {
      dispatch({
        type: LOGIN,
        users,
      });
      const combineArray = [];
      combineArray.push(users.cartData, users)
      console.warn("Else Data",users.cartData);
      console.warn("Combine Array",combineArray);
      alert("Successfully logged in");
    }
    
    // const payload = users.cartData.find((user) => {
    //  return user.username === username && user.password === password
    // });
    // console.warn("PAYLOAD NEW", payload);
    // console.log("PAYLOAD DATA : ", users.cartData.userData)
    // const payload = []
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].username === username && users[i].password === password) {
    //     payload.push(users[i])
    //     dispatch({
    //       type: LOGIN,
    //       payload,
    //     });
    //     alert("Successfully logged in");
    //     let path = "/";
    //     navigate(path);
    //   } else {
    //     alert('Wrong username or wrong password')
    //   }
    // }

    // if (payload) {
    //   dispatch({
    //     type: LOGIN,
    //     payload,
    //   });
    //   alert("Successfully logged in");
    //   let path = "/";
    //   navigate(path);
    // } else {
    //   alert("Wrong username or wrong password");
    // }
  };

  let navigate = useNavigate();
  const createAccount = () => {
    let path = "/register";
    navigate(path);
  };

  return (
    <>
    <div className="vh-100">
      <form type="text" className="d-flex justify-content-center mt-5">
        <div className="card col-12 col-md-4 p-3">
          <h1 className="mx-auto">Login</h1>
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
          <input
            className="btn btn-primary btn-block mb-2"
            type="button"
            value="Login"
            onClick={() => login()}
          />

          <input
            className="btn btn-success btn-block"
            type="button"
            value="Register"
            onClick={createAccount}
          />
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;
