import { Status, Id } from "common";

import type { RootState } from "state/types";

const statusOrder = {
  [Status.TODO]: 1,
  [Status.IN_PROGRESS]: 2,
  [Status.DONE]: 3,
} as const;

export const selectTasksLoading = ({ tasks: { loading } }: RootState) =>
  loading;

export const selectTaskById =
  (taskId: Id) =>
  ({ tasks }: RootState) =>
    tasks.entities[taskId];

export const selectAllTasks = ({ tasks }: RootState) =>
  Object.values(tasks.entities).sort(
    ({ status: statusA }, { status: statusB }) =>
      statusOrder[statusA] - statusOrder[statusB]
  );

export const selectTasksWithStatus =
  (status: Status) =>
  ({ tasks }: RootState) =>
    Object.values(tasks.entities).filter((task) => task.status === status);
