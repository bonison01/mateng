"use server";

import { db } from "@/lib/db";
import { SubscribeSchema } from "@/schema/subscribe";
import { z } from "zod";

export const subscribe = async (values: z.infer<typeof SubscribeSchema>) => {
  const validatedFields = SubscribeSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid Input!",
    };
  }

  try {
    const existing = await db.subscriptions.findUnique({
      where: {
        whatsapp: validatedFields.data.whatsapp,
      },
    });

    if (existing) {
      return {
        success: "You are already part of Mateng's community.",
      };
    }

    await db.subscriptions.create({
      data: {
        whatsapp: validatedFields.data.whatsapp,
      },
    });

    return {
      success: "Welcome to Mateng",
    };
  } catch(err){
    console.error(err);
    return {
      error: "Something Went Wrong!",
    };
  }
};
