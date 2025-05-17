import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, description: "task1", isDone: true },
    { id: 2, description: "task2", isDone: false },
    { id: 3, description: "task3", isDone: true },
    { id: 4, description: "task4", isDone: false },
  ],
  reducers: {
    addTodo: (state,action) => {
        const newTodo ={
            id:Date.now(),
            description: action.payload.description,
            isDone:false
        };
        state.push(newTodo);
    },
      toggleDone: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.isDone = !todo.isDone;
    },
       editTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) todo.description = description;
    },
  }
});

export const { addTodo,toggleDone,editTodo } =todoSlice.actions;

export default todoSlice.reducer;