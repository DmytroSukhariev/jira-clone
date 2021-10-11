import { z } from "zod";

import { Status } from "types";

import { id } from "schemas/common";

export const taskSchema = () =>
  z.object({
    id: id(),
    userId: id(),
    title: z.string(),
    status: z.nativeEnum(Status).default(Status.TODO),
  });
