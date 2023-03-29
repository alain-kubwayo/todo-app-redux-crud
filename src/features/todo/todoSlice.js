import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../utils/todos";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {value: todos},
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,
                completed: action.payload.completed
            }
            state.value.push(todo);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload.id);
        },
        completeTodo: (state, action) => {
            state.value.map(todo => {
                if(todo.id === action.payload.id){
                    todo.completed = !todo.completed;
                }
            })
        },
        updateTodo: (state, action) => {
            state.value.map(todo => {
                if(todo.id === action.payload.id){
                    todo.name = action.payload.name;
                }
            })

        }
    }
})

export const { addTodo, deleteTodo, completeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;