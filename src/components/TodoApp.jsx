import React, { useState } from 'react'
import ReusableButton from './ReusableButton';

function TodoApp() {
    const [todos,setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const handleAddTodo = () => {
        if(inputValue.trim() === ''){
            alert('please enter todo');
        }
        setTodos([...todos, {text:inputValue, completed: false} ]);
        setInputValue('');
    }

    const handleToggleCompleted = (index) => {
        const newTodos = todos.map((todo, i) => {
            if(i === index) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        })
        setTodos(newTodos);
    };

    const handleEdit = (index) => {
        const newTodos = todos.map((todo, i) => {
            if(i === index) {
                const newText = prompt('Edit Todo', todo.text);
                if(newText !== null && newText.trim() !== ''){
                    return{
                        ...todo,
                        text: newText
                    }
                }
            }
            return todo;
        })
        setTodos(newTodos);
        setInputValue('');
    }

  return (
    <div>
        <h2>Todo App</h2>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter Todo' />
        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.map((todo, index) => {
            return(
                <div key={index}>
                    <input type='checkbox' checked={todo.completed} onChange={() => handleToggleCompleted(index)} />
                    <span style={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.text}</span>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    {/* <button onClick={() => handleDelete(index)}>Delete</button> */}
                    <ReusableButton onClick={() => handleDelete(index)} text={'Delete'} color={'blue'}/>
                </div>
            )
        })}
        {todos.length === 0 && <p>No todos available</p>}
    </div>
  )
}

export default TodoApp;