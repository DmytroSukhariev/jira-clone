import _ from "lodash";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAllTasks } from "apis/jsonplaceholder";

import { Task, Id } from "types";
import { LoadingEntitiesState } from "state/types/utils";

import { getNextStatus } from "./tasks.utils";

export type TaskState = LoadingEntitiesState<Task>;

const tasksSliceName = "tasks";

const initialState: TaskState = {
  loading: true,
  entities: {},
};

export const fetchTasks = createAsyncThunk(
  `${tasksSliceName}/fetchTasks`,
  getAllTasks
);

const tasksSlice = createSlice({
  name: tasksSliceName,
  initialState,
  reducers: {
    setNextTaskState(state, { payload: id }: PayloadAction<Id>) {
      const task = state.entities[id];
      if (_.isNil(task)) return;
      task.status = getNextStatus(task.status);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTasks.fulfilled,
      (state: TaskState, { payload }: PayloadAction<Array<Task>>) => {
        payload.forEach((task) => {
          state.entities[task.id] = task;
        });
        state.loading = false;
      }
    );
  },
});

export const {
  reducer: tasksReducer,
  actions: { setNextTaskState },
} = tasksSlice;
