import { useState } from "react";
const MyComponent = () => {
  const [newTodo, setNewTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const todo = " doing homework";
  const handleAddTodo = () => {
    setListTodo([
      ...listTodo,
      { id: Math.floor(Math.random() * 10000 + 1), value: newTodo },
    ]);
  };
  const handleChangeInput = (event) => {
    setNewTodo(event.target.value);
  };
  const handleDeleteTodo = (todoId) => {
    let newFilter = listTodo.filter((item) => item.id !== todoId);
    setListTodo(newFilter);
  };
  return (
    <div>
      <div className="title">To do list </div>
      {listTodo.map((todo, index) => {
        return (
          <div>
            {index + 1}. {todo.value}
            <button
              className="delete"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <br />
      <div>Your ToDo List : {newTodo}</div>
      <input type={"text"} onChange={(event) => handleChangeInput(event)} />
      <button onClick={() => handleAddTodo()}>Add to do</button>
    </div>
  );
};

export default MyComponent;
