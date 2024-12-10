/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodo = ({ setRefresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <h1>Add Todo</h1>
      <input
        style={{
          margin: "1.5rem",
          padding: "0.5rem 1rem",
        }}
        placeholder="Enter Title..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{
          margin: "1.5rem",
          padding: "0.5rem 1rem",
        }}
        placeholder="Enter Description..."
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:5500/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
            }),
          }).then(() => {
            setRefresh((prev) => !prev);
            setTitle("");
            setDescription("");
            alert("Todo Added");
          });
        }}
        style={{
          margin: "0 1.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
