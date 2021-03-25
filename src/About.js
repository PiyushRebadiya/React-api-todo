import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";

function About(props) {
  const [blank, setBlank] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/posts/" + props.match.params.id).then(
      (res) => {
        res.json().then((result) => {
          // console.warn(result);
          setBlank({
            ...blank,
            id: result.id,
            name: result.name,
            author: result.author,
          });
        });
      }
    );
  }, []);

  const updateAdd = () => {
    fetch("http://localhost:3003/posts/" + blank.id, {
      method: "PUT",
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
  // console.log(props.match.params.id);

  return (
    <div>
      <Navbar />
      <h1>Update Page</h1>
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
      <button onClick={updateAdd}>Add </button>
    </div>
  );
}

export default About;
