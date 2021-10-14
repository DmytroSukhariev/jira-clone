import { Status } from "types";

export const statusDisplayNames = {
  [Status.TODO]: "Todo",
  [Status.IN_PROGRESS]: "In progress",
  [Status.DONE]: "Done",
} as const;
