import { z } from "zod";

import { Id } from "types";

export const id = (): z.Schema<Id> => z.number();
