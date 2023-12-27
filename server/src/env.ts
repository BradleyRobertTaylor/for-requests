import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PORT: z.string().optional(),
    PG_PORT: z
      .string()
      .transform((s) => parseInt(s, 10))
      .pipe(z.number())
      .optional(),
    PG_USERNAME: z.string().min(1),
    PG_PASSWORD: z.string().optional(),
    PG_DATABASE: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
