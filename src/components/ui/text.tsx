import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("text-foreground font-normal", {
  variants: {
    variant: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children?: React.ReactNode;
  as?: "p" | "span" | "blockquote";
}

const Text = ({
  variant,
  children,
  className,
  as = "p",
  ...rest
}: TextProps) => {
  const Tag = as;

  return (
    <Tag className={cn(textVariants({ variant }), className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Text;
