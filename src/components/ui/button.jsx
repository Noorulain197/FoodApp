import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// Utility function to merge class names conditionally
import { cn } from "@/lib/utils";  // Assuming this utility function is defined in your project to merge class names

// Button variants and styles configuration using `cva`
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9", // Used when you want an icon button size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button Component
function Button({
  className,
  variant,
  size,
  asChild = false,  // If `true`, uses Slot (useful for rendering different element types)
  ...props
}) {
  const Comp = asChild ? Slot : "button";  // If asChild is true, render a Slot, otherwise a button element

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))} // Merges button variants and additional className
      {...props}  // Spread the rest of the props to the component (e.g., onClick, disabled, etc.)
    />
  );
}

// Export the Button component and buttonVariants for usage in other parts of the application
export { Button, buttonVariants };
