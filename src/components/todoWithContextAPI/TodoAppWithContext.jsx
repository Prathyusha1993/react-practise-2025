import React, { useState } from 'react'
import {useTodos} from './TodoCreateContext';

function TodoAppWithContext() {
    const {todos, addTodo, deleteTodo, editTodo, toggleComplete} = useTodos();
    const [inputTodo, setInputTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editInput, setEditInput] = useState('');

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        addTodo(inputTodo);
        setInputTodo('');
    };

    const handleSubmitEditTodo = (e, i) => {
        e.preventDefault();
        editTodo(i, editInput);
        handleCancel();
    }

    const handleCancel = () => {
        setEditInput('');
        setEditTodoId(null);
    }

    const handleEditTodo = (i) => {
        setEditTodoId(i);
        setEditInput(todos[i].text);
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
                        <span onClick={() => toggleComplete(index)}>{todo.text}</span>
                        <button onClick={() => handleEditTodo(index)}>Edit</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </>
                )}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default TodoAppWithContext;