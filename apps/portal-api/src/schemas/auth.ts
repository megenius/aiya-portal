import { z } from "@hono/zod-openapi";

export const LoginSchema = z.object({
  email: z.string().email().openapi({
    example: "user@example.com",
  }),
  password: z.string().openapi({
    example: "password123",
  }),
});

export const AuthResponseSchema = z.object({
  token: z.string().openapi({
    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  }),
  refresh_token: z.string().openapi({
    example: "dGhpcyByZWZyZXNoIHRva2Vu...",
  }),
});
