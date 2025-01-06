import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface TableSearchInputProps {
  className?: React.ReactNode;
}

const TableSearchInput: React.FC<TableSearchInputProps> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
        <Search className="shrink-0 size-4" />
      </div>
      <Input
        className="py-3 ps-10 pe-4 block w-full"
        placeholder="Search projects"
      />
    </div>
  );
};

export default TableSearchInput;
