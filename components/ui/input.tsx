import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-xl bg-surface-lowest px-4 py-3 text-sm text-foreground transition-all duration-300",
        "border border-transparent focus-visible:outline-none focus-visible:border-brand-primary/50 focus-visible:ring-4 focus-visible:ring-brand-primary/10",
        "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
