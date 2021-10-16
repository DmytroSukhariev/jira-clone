import { Id } from "common";

import { RootState } from "state/types";

export const selectUserById =
  (id: Id) =>
  ({ users: { entities } }: RootState) =>
    entities[id];

export const selectUsersLoading = ({ users: { loading } }: RootState) =>
  loading;
