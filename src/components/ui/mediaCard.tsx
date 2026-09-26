import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/ui/button";
import { hVariants, pVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  author?: string;
  description?: string;
  ctaText?: string;
  className?: string;
};

export function MediaCard({ title, author, imageSrc, imageAlt, href, description, ctaText = "Read more", className}: MediaCardProps) {
  
  return (
    <div className={`${className}`}>
      {/* Image */}
      <Link href={href} className="block">
        <div className="relative aspect-[1.618/1] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        {/* Content */}
        <div className={`flex flex-col ${description ? "md:min-h-50" : "md:min-h-35"}`}>
          {author && (
            <p className={pVariants()}>
                {author}
            </p>
          )}

          <h3 className={cn(hVariants({ role: "cardTitle" }), "w-full md:w-10/12")}>
            {title}
          </h3>

          {description && (
            <p className={pVariants({ role: "cardDescription" })}>
                {description}
            </p>
          )}
        </div>
      </Link>

      {/* CTA */}
      <LinkButton href={href} text={ctaText} alt={imageAlt} arrow={true} />
    </div>
  );
}
