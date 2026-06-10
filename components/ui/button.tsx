import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: Gradient, rounded-full, no border
        default: "bg-[#2563eb] text-white rounded-full hover:shadow-ambient hover:opacity-90",

        // Secondary: surface_container_high, 20% ghost border
        secondary: "bg-[#222a3d] text-white border border-[#434655]/20 rounded-full hover:bg-[#2d3449]",

        // Tertiary: Emerald green for high-action
        tertiary: "bg-[#4edea3] text-[#003824] rounded-full hover:brightness-110",

        // Ghost fallback for accessibility
        ghost: "hover:bg-surface-low hover:text-white",
      },
      size: {
        default: "h-12 px-6 py-3", // Adjusted for the slightly larger, premium feel
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
