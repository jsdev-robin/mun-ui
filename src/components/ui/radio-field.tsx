import React, { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RadioFieldProps = InputHTMLAttributes<HTMLInputElement>;

const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  ({ id, className, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          ref={ref}
          className={cn(
            "shrink-0 border-primary rounded-full bg-transparent text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-primary checked:border-primary focus:ring-offset-background",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

RadioField.displayName = "RadioField";

export default RadioField;
