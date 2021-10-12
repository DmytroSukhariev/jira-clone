import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "state/slices/tasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
