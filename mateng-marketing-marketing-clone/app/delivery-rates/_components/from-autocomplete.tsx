"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { fromAreas } from "./areas";
import { useInstantRates } from "@/hooks/use-instant-rates";

// Define props type for the FromAutocomplete component
interface FromAutocompleteProps {
  className?: string;
}

// Define the type of the state object returned from useInstantRates
type InstantRatesState = {
  setFrom: (from: string) => void;
};

// Main FromAutocomplete component
export function FromAutocomplete({ className }: FromAutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState<string>(""); // State for selected location
  const setFrom = useInstantRates((state: InstantRatesState) => state.setFrom); // Access setFrom from the custom hook

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "min-w-[200px]  sm:min-w-[250px] justify-between sm:text-xl capitalize",
            !selectedArea && "text-gray-400",
            className  // Apply passed className here
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
            {fromAreas.map((area) => (
              <CommandItem
                key={area}
                value={area}
                onSelect={(currentArea: string) => {
                  const isSelected = currentArea.toLowerCase() === selectedArea.toLowerCase();
                  setSelectedArea(isSelected ? "" : currentArea);
                  setFrom(isSelected ? "" : currentArea); // Update the hook with the selected area
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
