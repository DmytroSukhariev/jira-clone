import React from "react";
import { Avatar, Skeleton, Tooltip } from "@mui/material";

import { Id } from "types";

import { stringAvatar } from "./user-avatar.utils";

import "./user-avatar.scss";

export const UserAvatar: React.FC<{ userId: Id }> = ({ userId }) => {
  const userName = "John doe";
  const isUserLoading = true;

  return isUserLoading ? (
    <Skeleton variant="circular" className="user-avatar" />
  ) : (
    <Tooltip title={userName}>
      <Avatar className="user-avatar" {...stringAvatar(userName)} />
    </Tooltip>
  );
};
