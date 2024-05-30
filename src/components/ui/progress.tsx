import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-1 w-full overflow-hidden rounded-full bg-muted-foreground",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all duration-5000 ease-in-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  checkpoints: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  checkpoints,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <Progress value={value} {...props} />
      {checkpoints.map((checkpoint, index) => (
        <div
          key={index}
          className="absolute top-0.5 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${checkpoint}%` }}
        ></div>
      ))}
    </div>
  );
};

export { ProgressBar };
