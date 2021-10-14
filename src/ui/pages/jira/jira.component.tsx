import React from "react";

import { Container } from "@mui/material";

import { TasksBoard } from "ui/components/tasks-board";
import { TasksList } from "ui/components/tasks-list";

import "./jira.scss";

export const Jira: React.FC = () => (
  <Container className="jira-page">
    <TasksBoard />
    <TasksList />
  </Container>
);
