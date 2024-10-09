"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toAreas } from "./areas";
import { useInstantRates } from "@/hooks/use-instant-rates";

// Define the shape of the state returned by useInstantRates
type InstantRatesState = {
  setTo: (to: string) => void;
};

// Define props type for the ToAutocomplete component
interface ToAutocompleteProps {
  className?: string;
}

export function ToAutocomplete({ className }: ToAutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState<string>(""); // Explicitly type as string
  const setTo = useInstantRates((state: InstantRatesState) => state.setTo);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "min-w-[200px] font-medium sm:min-w-[250px] justify-between sm:text-xl capitalize",
            !selectedArea && "text-gray-400",
            className // Apply className here
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
            {toAreas.map((area) => (
              <CommandItem
                key={area}
                value={area}
                onSelect={(currentArea: string) => {
                  const isSelected = currentArea.toLowerCase() === selectedArea.toLowerCase();
                  setSelectedArea(isSelected ? "" : currentArea);
                  setTo(isSelected ? "" : currentArea); // Update the hook with the selected area
                  setOpen(false); // Close the popover when an item is selected
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
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
