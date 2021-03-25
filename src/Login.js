import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function Login(props) {
  const [arr, setArr] = useState([]);

  const login = () => {
    console.log(arr.name);
    fetch("http://localhost:3003/login?q=" + arr.name).then((data) => {
      data.json().then((resp) => {
        // console.log("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.log(props.history.push("/"));
        } else {
          alert("Please Check Username And Password");
        }
      });
    });
  };

  return (
    <div>
      <Navbar />
      <input
        type="text"
        name="user"
        onChange={(e) => setArr({ ...arr, name: e.target.value })}
        placeholder="Enter Your Name"
      />
      <br />
      <br />
      <input
        type="text"
        name="password"
        onChange={(e) => setArr({ ...arr, password: e.target.value })}
        placeholder="Enter Your Password"
      />
      <br />
      <br />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
