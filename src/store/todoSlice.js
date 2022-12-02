import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            console.log(state)
            console.log(action)

            state.todos.push({
                id: action.payload.id,
                img: action.payload.img,
                header: action.payload.header,
                description: action.payload.description,
                price: action.payload.price,
                completed: false
            })
        },

        removeTodo(state, action) {
            state.todos.filter(obj => obj !== action.payload.id)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;