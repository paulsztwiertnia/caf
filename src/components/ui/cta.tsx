'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ActionButton } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Separate CVA for each element with their base styles built-in
const sectionVariants = cva(
  "grid grid-cols-12 py-24", 
  {
  variants: {
    variant: {
      1: "bg-(--color-background-light)",
      2: "bg-transparent",
      3: "bg-(--color-background-mid)",
    },
  },
  defaultVariants: { variant: 1 },
});

const containerVariants = cva(
  "",  
  {
    variants: {
      variant: {
        1: "text-(--color-text) col-span-10 col-start-2 text-center",
        2: "text-(--color-text) text-center col-span-10 col-start-2",
        3: "text-(--color-text-reverse) col-span-8 col-start-3 text-left lg:text-center",
      },
    },
    defaultVariants: { variant: 1 },
  }
);

const headingVariants = cva(
  "", 
  {
    variants: {
      variant: {
        1: "w-10/12 mx-auto text-5xl lg:text-7xl font-normal",
        2: "w-10/12 mx-auto font-normal text-3xl sm:text-5xl md:text-6xl",
        3: "w-full text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-normal",
      },
    },
    defaultVariants: { variant: 1 },
  }
);

const textVariants = cva(
  "",
  {
    variants: {
      variant: {
        1: "w-8/10 mx-auto mb-14 text-xl",
        2: "w-8/10 mx-auto mb-14 text-xl",
        3: "w-full text-lg sm:text-xl md:text-3xl font-light",
      },
    },
    defaultVariants: { variant: 1 },
  }
);

interface CtaProps extends VariantProps<typeof sectionVariants> {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function Cta({ heading, text, buttonText, buttonLink, variant, className }: CtaProps) {
  const router = useRouter();
  
  return (
    <div className={cn(sectionVariants({ variant }), className)}>
      <div className={containerVariants({ variant })}>
        {heading && <h2 className={headingVariants({ variant })}>{heading}</h2>}
        {text && <p className={textVariants({ variant })}>{text}</p>}
      </div>
      <div className="col-span-12 md:col-span-2 md:col-start-6 ">
        {buttonText && buttonLink && <ActionButton onClick={() => router.push(buttonLink)} text={buttonText} variant={`${variant === 3 ? "light" : "dark"}`} className="w-full text-center" />}
      </div>
    </div>
  );
}