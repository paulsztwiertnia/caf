"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { hVariants } from "@/lib/variants"

interface AnimatedTagProps {
  children: React.ReactNode;
  tagKey: string;
}

export function AnimatedTag({ children, tagKey }: AnimatedTagProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset and trigger animation when tagKey changes
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, [tagKey]);

  return (
    <h2
      className={cn(hVariants({role: "pageTitle"}), `inline transition-all duration-200 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`)}
    >
      {children}
    </h2>
  );
}