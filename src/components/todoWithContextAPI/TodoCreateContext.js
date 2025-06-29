import React, { createContext, useContext, useEffect, useState } from 'react'

const TodoCreateContext = createContext();

export const TodoCreateProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored): [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        if(text.trim()){
            setTodos(prev => [...prev, {text, completed: false}]);
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const editTodo = (index, newText) => {
        const updatedTodos = todos.map((todo, i) => (i === index ? {...todo, text:newText} : todo));
        setTodos(updatedTodos);
    };

    const toggleComplete = (index) => {
        const updated = todos.map((todo, i) => (i === index ? {...todo, completed: !todo.completed} : todo));
        setTodos(updated);
    };

    return (
        <TodoCreateContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete}}>
            {children}
        </TodoCreateContext.Provider>
    )
}

export const useTodos = () => useContext(TodoCreateContext);