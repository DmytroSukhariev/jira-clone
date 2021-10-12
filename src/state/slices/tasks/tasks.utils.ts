import { Status } from "types";

const statusStateMachine = {
  [Status.TODO]: Status.IN_PROGRESS,
  [Status.IN_PROGRESS]: Status.DONE,
  [Status.DONE]: Status.TODO,
} as const;

export const getNextStatus = (currentStatus: Status) =>
  statusStateMachine[currentStatus];