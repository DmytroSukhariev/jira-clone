import React from "react";
import { Paper, List, Typography, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import { selectTasksLoading, selectAllTasks } from "state";

import { TaskType } from "ui/components/task";
import { Task } from "ui/components/task";

import "./tasks-list.scss";

export const TasksList: React.FC = () => {
  const isTasksLoading = useSelector(selectTasksLoading);
  const tasks = useSelector(selectAllTasks);

  return (
    <Paper className="tasks-list-wrapper">
      <Typography variant="h3">Ticket list</Typography>
      {isTasksLoading ? (
        <CircularProgress />
      ) : (
        <List className="tasks-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} taskType={TaskType.FULL} />
          ))}
        </List>
      )}
    </Paper>
  );
};
