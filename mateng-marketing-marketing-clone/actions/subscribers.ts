"use server";

import { db } from "@/lib/db";
import { SubscribersSchema } from "@/schema/subscriber";
import { z } from "zod";

const PASSKEY = process.env.SUBSCRIBERS_PASSKEY;

export const getSubscribers = async (
  values: z.infer<typeof SubscribersSchema>
) => {
  const validatedFields = SubscribersSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Arguments!",
    };
  }

  const { passKey, start, end } = validatedFields.data;

  if (PASSKEY && passKey !== PASSKEY) {
    return {
      error: "Wrong Credentials!",
    };
  }

  try {
    const subscribers = await db.subscriptions.findMany({
      where: {
        createdAt: {
          gte: start,
          lte: end,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: subscribers,
      start,
      end,
    };
  } catch (err) {
    console.error(err);
    return {
      error: "Something Went Wrong!",
    };
  }
};
