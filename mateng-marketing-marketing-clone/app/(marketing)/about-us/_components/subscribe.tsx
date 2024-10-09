"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubscribeSchema } from "@/schema/subscribe";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { subscribe } from "@/actions/subscribe";
import { toast } from "sonner";

export function Subscribe() {
  const [isLoading, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {
      whatsapp: "",
    },
  });

  const onSubmitHandler = (values: z.infer<typeof SubscribeSchema>) => {
    startTransition(() => {
      subscribe(values).then((data) => {
        if (data.success) {
          toast.success(data.success);
          form.reset();
        } else {
          toast.error(data.error);
        }
      });
    });
  };

  return (
    <div className="py-6 w-72 sm:w-80">
      <div className="font-medium sm:font-semibold text-sm text-center">
        Get into our business community
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)}>
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex">
                    <Input
                      {...field}
                      className="focus-visible:ring-0 
                focus-visible:ring-offset-0  bg-gray-200 rounded-l-3xl rounded-r-[-15px] h-12 w-60 font-semibold text-black"
                      placeholder="Whatsapp Number"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="ml-[-10%] h-12 rounded-3xl sm:w-36 bg-yellow-400 text-black hover:bg-yellow-500
                      disabled:bg-gray-200 disabled:opacity-100 disabled:text-white"
                    >
                      Subscribe
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
