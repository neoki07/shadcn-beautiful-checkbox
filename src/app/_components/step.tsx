import { cn } from "@/lib/utils"

type StepProps = React.HTMLAttributes<HTMLHeadingElement>

export function Step({ className, ...props }: StepProps) {
  return (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}
