import { z } from "zod";

const phoneRegex = new RegExp(/^[6789]\d{9}$/);
export const SubscribeSchema = z.object({
  whatsapp: z.string().regex(phoneRegex, "Invalid Number!"),
});
