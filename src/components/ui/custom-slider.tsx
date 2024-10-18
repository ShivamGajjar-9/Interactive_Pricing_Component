"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface CustomSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ThumbComponent?: React.ComponentType<{ isDragging: boolean }>;
}

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  CustomSliderProps
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
        <SliderPrimitive.Range className="absolute h-full bg-[#10D5C2]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-10 w-10 rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0">
        {ThumbComponent && <ThumbComponent isDragging={isDragging} />}
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
CustomSlider.displayName = SliderPrimitive.Root.displayName;

export { CustomSlider };