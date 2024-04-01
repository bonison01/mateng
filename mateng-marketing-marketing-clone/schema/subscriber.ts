import { ZodIssueCode, z } from "zod";

export const SubscribersSchema = z
  .object({
    passKey: z.string().min(1, {
      message: "Can't be empty!",
    }),
    start: z.date(),
    end: z.date(),
  })
  .superRefine((arg, ctx) => {
    if (arg.end < arg.start) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        path: ["end"],
        message: "End should be greater than or equal to Start",
      });
    }
  });
