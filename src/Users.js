import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Users() {
  const [searchData, setSearchData] = useState(null);
  const [noData, setNoData] = useState(false);
  const [lastSearch, setLastSearch] = useState("");

  const search = (key) => {
    // console.log(key);
    setLastSearch(key);
    fetch("http://localhost:3003/posts?q=" + key).then((data) => {
      data.json().then((resp) => {
        // console.log("resp", resp);
        if (resp.length > 0) {
          setSearchData(resp);
          setNoData(false);
        } else {
          setSearchData(null);
          setNoData(true);
        }
      });
    });
  };

  const deleteItem = (id) => {
    //   console.log('hello');
    fetch("http://localhost:3003/posts/" + id, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        search(lastSearch);
      });
    });
  };
  return (
    <div>
      <Navbar />
      <h1>Search API</h1>
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        placeholder="Search Input..."
      />
      {searchData ? (
        <div>
          <table>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {searchData.map((item) => (
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
        ""
      )}
      {noData ? <h3>No Data</h3> : null}
    </div>
  );
}

export default Users;
