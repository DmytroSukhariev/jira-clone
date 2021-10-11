import { z } from "zod";

import { taskSchema } from "schemas/entities";

export const getAllTasksSchema = () => z.array(taskSchema());
