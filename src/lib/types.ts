import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 10 characters"),
});
  

export type TloginSchema = z.infer<typeof loginSchema>;
