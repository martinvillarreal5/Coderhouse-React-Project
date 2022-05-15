import { z } from "zod"

export const RegisterSchema = z.object({
  firstName: z.string()
    .max(20, { message: "Must be 20 or fewer characters long" }).nullable().optional(),
  lastName: z.string()
    .max(20, { message: "Must be 20 or fewer characters long" }).nullable().optional(),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Use a valid email format" }),
  password: z.string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Must be 8 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),
  confirmPassword: z.string(),
  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  }),
}).refine(data => data.confirmPassword === data.password, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});