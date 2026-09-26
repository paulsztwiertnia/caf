"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Variant object for the buttons
const variants = {
  dark: "border border-black text-black hover:bg-(--color-button-hover-dark) hover:text-white",
  light: "border border-white text-white hover:bg-(--color-button-hover-light) hover:text-black",
  underline: "relative border-0 p-0",
}

/* =========================================================
   CVA Classes
   ========================================================= */

const actionButtonVariants = cva(
  "tracking-wide my-6 px-6 py-2 uppercase inline-block text-center transition-colors hover:cursor-pointer",
  {
    variants: {
      variant: {
        dark: variants.dark,
        light: variants.light,
        underline: variants.underline,
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

const linkButtonVariants = cva(
  "group inline-flex items-center gap-2 text-lg px-6 my-2 py-2",
  {
    variants: {
      variant: {
        dark: variants.dark,
        light: variants.light,
        underline: variants.underline,
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  }
);

/* =========================================================
   Props
   ========================================================= */

interface ActionButtonProps extends VariantProps<typeof actionButtonVariants> {
  text: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface LinkButtonProps extends VariantProps<typeof linkButtonVariants> {
  text: string;
  href: string;
  alt?: string;
  arrow?: boolean;
  arrowDirection?: "left" | "right";
  className?: string;
}

/* =========================================================
   ActionButton
   ========================================================= */

export const ActionButton: React.FC<ActionButtonProps> = ({ text, variant = "dark", onClick, children, className, type, disabled }) => {
  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(actionButtonVariants({ variant }), "origin-center", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {text}
      {children}
      {variant === "underline" && (
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-(--color-link-hover) transition-all duration-300 group-hover:w-full" />
      )}
    </motion.button>
  );
};

/* =========================================================
   LinkButton
   ========================================================= */

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  text,
  alt,
  arrow = false,
  arrowDirection = "right",
  variant = "underline",
  className,
}) => {
  return (
    <Link
      href={href}
      aria-label={alt}
      className={cn(linkButtonVariants({ variant }), className)}
    >
      <span className="relative">
        {text}
        {variant === "underline" && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-(--color-link-hover) transition-all duration-300 group-hover:w-full" />
        )}
      </span>

      {arrow && variant === "underline" && (
        
        <motion.span
          whileHover={{ rotate: arrowDirection === "right" ? -45 : 45 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {arrowDirection === "right" ? <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" /> : <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          
        </motion.span>
       
      )}
    </Link>
  );
};
