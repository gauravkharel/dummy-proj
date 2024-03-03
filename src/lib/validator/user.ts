import { z } from "zod";

export const LoginValidator = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
});

export type LoginRequest = z.infer<typeof LoginValidator>;
