"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toAreas } from "./areas";
import { useInstantRates } from "@/hooks/use-instant-rates";

export function ToAutocomplete() {
  const [open, setOpen] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState("");
  const setTo = useInstantRates((state) => state.setTo);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "min-w-[200px] font-medium sm:min-w-[250px] justify-between sm:text-xl capitalize",
            !selectedArea && "text-gray-400"
          )}
        >
          {selectedArea || "Select a location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup className="h-[200px] overflow-auto">
            {toAreas.map((area) => {
              return (
                <CommandItem
                  key={area}
                  value={area}
                  onSelect={(currentArea) => {
                    setSelectedArea(
                      currentArea.toLowerCase() === selectedArea.toLowerCase()
                        ? ""
                        : currentArea
                    );
                    setTo(
                      currentArea.toLowerCase() === selectedArea.toLowerCase()
                        ? ""
                        : currentArea
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      area.toLowerCase() === selectedArea.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {area}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
