import React from "react";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { selectTasksLoading } from "state";

import { Status } from "types";

import { TasksBoardColumn } from "ui/components/tasks-board-column";
import { Spinner } from "ui/components/spinner";

import "./tasks-board.scss";

export const TasksBoard: React.FC = () => {
  const isLoading = useSelector(selectTasksLoading);

  return (
    <Paper className="tasks-board-wrapper">
      <Typography variant="h3">Board</Typography>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="tasks-board">
          <TasksBoardColumn status={Status.TODO} />
          <TasksBoardColumn status={Status.IN_PROGRESS} />
          <TasksBoardColumn status={Status.DONE} />
        </div>
      )}
    </Paper>
  );
};
