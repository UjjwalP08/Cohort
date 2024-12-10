import { useEffect, useState } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  console.log(todos);

  useEffect(() => {
    fetch("http://localhost:5500/todo").then((res) => {
      res.json().then((ans) => {
        setTodos(ans.data);
      });
    });

    // const answer = [];
    // setTodos(answer ?? []);
  }, [refresh]);
  return (
    <div>
      <AddTodo setRefresh={setRefresh} />
      <div style={{ margin: "1.5rem" }}>
        {todos?.map((ele) => (
          <div key={ele?._id}>
            <TodoList {...ele} setRefresh={setRefresh} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
