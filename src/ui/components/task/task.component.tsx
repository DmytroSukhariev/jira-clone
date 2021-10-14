import React from "react";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

import type { Task as TaskEntity } from "types";

import { UserAvatar } from "ui/components/user-avatar";
import { statusDisplayNames } from "ui/common";

import { TaskType } from "./task.types";

type TaskProps = {
  task: TaskEntity;
  taskType: TaskType;
};

export const Task: React.FC<TaskProps> = ({ task, taskType }) => {
  const isFullTask = taskType === TaskType.FULL;

  return (
    <ListItem>
      <ListItemAvatar>
        <UserAvatar userId={task.userId} />
      </ListItemAvatar>
      <ListItemText primary={task.title} />
      {isFullTask ? (
        <ListItemText primary={statusDisplayNames[task.status]} />
      ) : null}
    </ListItem>
  );
};
