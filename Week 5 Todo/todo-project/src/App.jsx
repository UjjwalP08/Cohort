/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Todo = (props) => {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
      </div>
    </>
  );
};

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "Todo 1 description",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Todo 2",
      description: "Todo 2 description",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Todo 3 description",
      isCompleted: true,
    },
  ]);

  const addTodoHandler = () => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: `Todo ${prev.length + 1}`,
          description: `Todo ${prev.length + 1} description`,
          isCompleted: false,
        },
      ];
    });
  };

  return (
    <>
      <div>
        <button onClick={addTodoHandler}>Add Todo</button>
        {todoList?.map((ele) => (
          <div key={ele.id}>
            <Todo title={ele.title} description={ele.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
