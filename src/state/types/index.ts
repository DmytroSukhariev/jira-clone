import { Action, ThunkAction } from "@reduxjs/toolkit";
import type { store } from "state/store";

import type { TaskState } from "state/slices/tasks";

export * from "./utils";

export type RootState = {
  tasks: TaskState;
};

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
