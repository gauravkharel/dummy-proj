import { z } from "zod";

export const LoginValidator = z.object({
  username: z.string().min(2),
  password: z.string(),
});

export type LoginRequest = z.infer<typeof LoginValidator>;
