"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { SubscribersSchema } from "@/schema/subscriber";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function Forms({
  onSubmitHandler,
  formVisible,
}: {
  onSubmitHandler: (values: z.infer<typeof SubscribersSchema>) => void;
  formVisible: boolean;
}) {
    const today = new Date();
    today.setHours(0,0,0,0);
  const form = useForm<z.infer<typeof SubscribersSchema>>({
    resolver: zodResolver(SubscribersSchema),
    defaultValues: {
      passKey: "",
      start: today,
      end: today,
    },
  });

  if (!formVisible) {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col space-y-2">
          <FormField
            name="passKey"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pass Key</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="enter your passkey ... " />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="start"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-x-2">
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="end"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-x-4">
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
}
