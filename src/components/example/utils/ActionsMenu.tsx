import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Archive, EllipsisVertical, Pencil, Star, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ActionsMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="size-7">
          <EllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" align="end">
        <Button
          variant="ghost"
          size="xs"
          className="w-full justify-start text-accent-foreground"
        >
          <Pencil />
          Edit team
        </Button>

        <Button
          variant="ghost"
          size="xs"
          className="w-full justify-start text-accent-foreground"
        >
          <Star />
          Add to favorites
        </Button>
        <Button
          variant="ghost"
          size="xs"
          className="w-full justify-start text-accent-foreground"
        >
          <Archive />
          Archive team
        </Button>
        <Separator className="my-1" />
        <Button
          variant="ghost"
          size="xs"
          className="w-full justify-start text-red-500 hover:text-red-500"
        >
          <Trash />
          Delete team
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ActionsMenu;
