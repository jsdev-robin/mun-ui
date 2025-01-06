"use client";

import React from "react";

import {
  BadgeCheck,
  Building2,
  Contact,
  ContactRound,
  ListMinus,
  Mail,
  MapPin,
  Phone,
  SlidersHorizontal,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const TableUserFilter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="xs">
          <SlidersHorizontal />
          Filter
          <Badge
            variant="secondary"
            className="size-5 flex items-center justify-center rounded-full text-xs px-0 py-0"
          >
            5
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-9 outline-none border-none focus-within:border-none  focus-within:ring-0"
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <Contact className="w-3 h-3" />
                <span className="text-sm">Name</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <Mail className="w-3 h-3" />
                <span className="text-sm">Email addresses</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <ListMinus className="w-3 h-3" />
                <span className="text-sm">Description</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <Building2 className="w-3 h-3" />
                <span className="text-sm">Company</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <ContactRound className="w-3 h-3" />
                <span className="text-sm">User ID</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <Phone className="w-3 h-3" />
                <span className="text-sm">Phone numbers</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <MapPin className="w-3 h-3" />
                <span className="text-sm">Location</span>
              </CommandItem>
              <CommandItem className="w-full flex items-center gap-2 cursor-pointer text-accent-foreground">
                <BadgeCheck className="w-3 h-3" />
                <span className="text-sm">Signed up as</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TableUserFilter;
