import { cn } from "@/lib/utils";
import React, { forwardRef, InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, className, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          ref={ref}
          className={cn(
            "shrink-0 border-primary rounded bg-transparent text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-primary checked:border-primary focus:ring-offset-background",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
