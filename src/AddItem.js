import React, { useState } from "react";
import Navbar from "./Navbar";

function AddItem() {
  const [blank, setBlank] = useState([]);

  const createAdd = () => {
    //   console.log(blank);
    fetch("http://localhost:3003/posts", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blank),
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
      });
    });
  };
  return (
    <div>
      <Navbar />
      <h1>Add Item</h1>
      <input
        onChange={(e) => setBlank({ ...blank, id: e.target.value })}
        value={blank.id}
        placeholder="Enter Id"
      />
      <br />
      <br />
      <input
        onChange={(e) => setBlank({ ...blank, name: e.target.value })}
        value={blank.name}
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        onChange={(e) => setBlank({ ...blank, author: e.target.value })}
        value={blank.author}
        placeholder="Enter Author"
      />
      <br />
      <br />
      <button onClick={createAdd}>Add</button>
    </div>
  );
}

export default AddItem;
