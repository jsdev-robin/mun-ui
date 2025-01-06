"use client";

import React, { useState } from "react";
import { TableHead } from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronsUpDown,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface TableHeadTitleProps {
  title: string;
}

const TableHeadTitle: React.FC<TableHeadTitleProps> = ({ title }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover
      onOpenChange={(value) => {
        setOpen(value);
      }}
      open={open}
    >
      <PopoverTrigger asChild>
        <TableHead>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "w-full justify-start",
              open && "bg-accent text-foreground"
            )}
          >
            {title}
            <ChevronsUpDown />
          </Button>
        </TableHead>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1 ml-4" align="start">
        {[
          { icon: <ArrowUp />, label: "Import Contact" },
          { icon: <ArrowDown />, label: "Sort descending" },
          { icon: <ArrowLeft />, label: "Move left" },
          { icon: <ArrowRight />, label: "Move right" },
        ].map((button, index) => (
          <Button
            key={index}
            variant="ghost"
            size="xs"
            className="w-full justify-start text-accent-foreground"
            onClick={() => setOpen(false)}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
        <Separator className="my-1" />
        <Button
          variant="ghost"
          size="xs"
          className="w-full justify-start text-accent-foreground"
          onClick={() => setOpen(false)}
        >
          <EyeOff />
          Hide in view
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default TableHeadTitle;