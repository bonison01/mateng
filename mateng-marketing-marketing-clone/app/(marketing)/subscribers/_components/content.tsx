"use client";

import { SubscribersSchema } from "@/schema/subscriber";
import { z } from "zod";
import { Forms } from "./forms";
import { useState, useTransition } from "react";
import { getSubscribers } from "@/actions/subscribers";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type SubscriberData = {
  id: string;
  whatsapp: string;
  createdAt: Date;
};

export function Content() {
  const [formVisible, setFormVisible] = useState(true);
  const [subscribers, setSubscribers] = useState<SubscriberData[]>([]);
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [isLoading, startTransition] = useTransition();

  const onSubmitHandler = (values: z.infer<typeof SubscribersSchema>) => {
    values.end.setHours(23, 59, 59, 999);
    startTransition(() => {
      getSubscribers(values).then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        }
        setSubscribers(data.data || []);
        setStart(data.start);
        setEnd(data.end);
        setFormVisible(false);
      });
    });
  };

  return (
    <div className="mt-20 p-4 sm:mt-40">
      <Forms onSubmitHandler={onSubmitHandler} formVisible={formVisible} />
      <div className="space-y-2">
        <h1 className={cn("hidden font-semibold", !formVisible && "block")}>
          List of Subscribers from {start?.toLocaleDateString()} to{" "}
          {end?.toLocaleDateString()}
        </h1>
        {subscribers.length > 0 ? (
          subscribers.map((subscriber, index) => (
            <div key={subscriber.id} className="flex space-x-6">
              <p>{index + 1}.</p>
              <p>{subscriber.whatsapp}</p>
              <p>{`${subscriber.createdAt.toLocaleDateString()}`}</p>
            </div>
          ))
        ) : (
          <p className={cn("hidden", !formVisible && "block")}>
            No Subscribers found!
          </p>
        )}
      </div>
    </div>
  );
}
