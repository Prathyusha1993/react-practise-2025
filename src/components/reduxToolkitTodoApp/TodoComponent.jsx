import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

function TodoComponent() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if(input.trim() === '' ) return;

    const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
    }
    dispatch(addTodo(newTodo));
    setInput("");
  };

  return (
    <div>
      <h3> Todo Component </h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter todo"
      />
      <button onClick={handleAddTodo}>Add Sample Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoComponent;
