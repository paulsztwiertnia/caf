"use client";

import { MediaCard } from "@/components/ui/mediaCard";
import { hVariants } from "@/lib/variants";

interface HighlightCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  author: string;
  description: string;
  linkPath: string;
}

interface HighlightsProps {
  title: string;
  subtitle: string;
  description: string;
  cards: HighlightCard[];
}

export function Highlights({ title, subtitle, description, cards }: HighlightsProps) {
  return (
    <div className="py-12 md:py-24">
      <div>
        <h2 className={hVariants({ role: "pageSection" })}>{title}</h2>
        <h3 className="section-subtitle">{subtitle}</h3>
        <p className="w-12/12 md:w-6/12 text-lg">{description}</p>
      </div>
      

      <div className="grid grid-cols-12 gap-y-10">
        {cards.map((card, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <MediaCard
              title={card.title}
              author={card.author}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              href={card.linkPath}
              ctaText="Read more"
            />
          </div>
        ))}
      </div>
    </div>
  );
}