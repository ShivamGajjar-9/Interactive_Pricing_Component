"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full bg-background hover:bg-muted"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}; 