import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://localhost:3003/posts").then((res) => {
      res.json().then((result) => {
        // console.warn(result);
        setArr({ ...arr, list: result });
      });
    });
  }
  console.log(arr);

  const deleteItem = (id) => {
    //   console.log('hello');
    fetch("http://localhost:3003/posts/" + id, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
      });
    });
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>Table</h1>
        {arr.list ? (
          <div>
            <table>
              <tr>
                <th>#</th>
                <th>Language</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
              {arr.list.map((item, i) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>
                    <Link to={"/update/" + item.id}>
                      <i class="far fa-edit"></i>
                    </Link>
                    <Link onClick={() => deleteItem(item.id)}>
                      <i class="fas fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
