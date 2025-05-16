import {createSlice} from '@reduxjs/toolkit';
import { removeTodo } from './actions';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state,action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;