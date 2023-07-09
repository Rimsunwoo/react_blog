import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state.todos, action.payload];
    },
  },
});

// export
export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
