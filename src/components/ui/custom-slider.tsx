"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    ThumbComponent?: React.ComponentType;
  }
>(({ className, ThumbComponent, ...props }, ref) => {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#ECF0FB]">
        <SliderPrimitive.Range
          className={cn(
            "absolute h-full bg-[#10D5C2] transition-shadow duration-200",
            isDragging && "shadow-[0_0_20px_#10D5C2]"
          )}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-10 w-10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isDragging && "shadow-[0_0_20px_#10D5C2]"
        )}
      >
        {ThumbComponent && <ThumbComponent />}
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
CustomSlider.displayName = SliderPrimitive.Root.displayName;

export { CustomSlider };
