import React, { useState } from 'react'

function TodoAppWithContext() {
    const [inputTodo, setInputTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodoId, setEditTodoId] = useState(null);
    const [editInput, setEditInput] = useState('');

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        if(!inputTodo.trim()){
            return;
        }
        setTodos([...todos, {text: inputTodo, completed: false}]);
        setInputTodo('');
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((_, i) => i !== id));
    };

    const handleEditTodo = (index) => {
        setEditTodoId(index);
        setEditInput(todos[index].text);
    };

    const handleSubmitEditTodo = (e, i) => {
        e.preventDefault();
        if(!editInput.trim()){
            return;
        }
        const updatedTodos = todos.map((todo, index) => (index === i ? {...todo, text:editInput} : todo))
        setTodos(updatedTodos);
        handleCancel();
    }

    const handleCancel = () => {
        setEditInput('');
        setEditTodoId(null);
    }

    const toggleCompleted = (index) => {
        const newTodos = todos.map((todo, i) => (i === index ? {...todo, completed: !todo.completed} : todo))
        setTodos(newTodos);
    }

  return (
    <div>
        <h3>Todo App With Context API</h3>
        <form onSubmit={handleSubmitTodo}>
            <input type='text' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder='Enter Task'/>
            <button type='submit'>Add Task</button>
        </form>
        <ul>
        {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
                {editTodoId === index ? (
                    <form onSubmit={(e) => handleSubmitEditTodo(e, index)}>
                        <input type='text' value={editInput} onChange={(e) => setEditInput(e.target.value)} placeholder='Edit todo'/>
                        <button type='submit'>Save</button>
                        <button type='button' onClick={handleCancel}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
                        <button onClick={() => handleEditTodo(index)}>Edit</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </>
                )}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default TodoAppWithContext;