/* eslint-disable react/prop-types */
const TodoList = ({ title, description, isCompleted, _id, setRefresh }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <div>
        {isCompleted ? (
          <p>Completed</p>
        ) : (
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              fetch("http://localhost:5500/todo/completed", {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: _id,
                }),
              }).then(() => {
                setRefresh((prev) => !prev);
                alert("Todo Mark as Completed ");
              });
            }}
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
