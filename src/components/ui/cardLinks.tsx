"use client";

import { MediaCard } from "@/components/ui/mediaCard";

interface Card {
  slug?: string | null;
  title?: string | null;
  thumbnailImage?: string | null;
}

interface CardProps {
  title: string;
  basePath: string;
  ctaText?: string;
  collection: {
    docs: Card[];
    totalDocs: number;
  };
  currentSlug: string;
}

export function CardLinks({title, basePath, ctaText = "Read more", collection, currentSlug }: CardProps) {
  const docs = collection?.docs || [];

  const filteredDocs = docs.filter((doc) => doc.slug !== currentSlug);

  if (filteredDocs.length === 0) return null;

  const normalizedBasePath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;

  return (
    <section className="bold-container grid grid-cols-1 md:grid-cols-12 py-12 divider-y">
      <div className="col-span-12">
        <h2 className="">
          {title}
        </h2>
      </div>

      {filteredDocs.map((doc, index) => (
        <div
          key={doc.slug ?? index}
          className="col-span-12 md:col-span-6 lg:col-span-4"
        >
          <MediaCard
            title={doc.title ?? ""}
            imageSrc={doc.thumbnailImage ?? ""}
            imageAlt={doc.title ?? ""}
            href={`${normalizedBasePath}/${doc.slug ?? ""}`}
            ctaText={ctaText}
          />
        </div>
      ))}
    </section>
  );
}