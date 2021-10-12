import { Id } from "types";

import { RootState } from "state/types";

export const selectUserById =
  (id: Id) =>
  ({ users: { entities } }: RootState) =>
    entities[id];

export const selectUsersLoading = ({ users: { loading } }: RootState) =>
  loading;
