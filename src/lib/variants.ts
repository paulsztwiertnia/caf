import { cva } from "class-variance-authority";

export const hVariants = cva(
  // Base styles applied to all variants goes here
  "",
  {
    variants: {
      role: {
        displayHero: "tracking-[-0.077em] text-[16vw] xl:text-[13vw] 2xl:text-[10vw] leading-[.9em]",
        pageTitle: "mt-0 mb-4 text-[1.5em] leading-[1.1em]",
        pageSection: "text-2xl mb-6 mt-2",
        projectTitle: "mb-0 mt-0",
        subpageHeading: "mb-8",
        cardTitle: "text-2xl leading-[1.1em] mt-[1rem] mb-[0.25em] min-h-[2.25em] font-semibold",
        workCardTitle: "mt-0 text-[1em] font-bold mb-[0.1em]",
        caseStudySliderTitle: "text-4xl leading-[1.2em] lg:text-5xl font-light w-full md:w-11/12 mt-0 mb-6",
        caseStudyTitle: "text-4xl md:text-6xl font-light mt-0",
        descriptionTitle: "",
      },
    },
  }
);

export const pVariants = cva(
  // Base styles applied to all variants goes here
  "",
  {
    variants: {
      role: {
        cardDescription: "mt-0 w-full md:w-10/12",
        pageDescription: "mb-0 md:w-6/12",
        projectLeadText: "text-[1.4em]",
        projectTextBlock: "text-[1.2em]"
      },
    },
  }
)