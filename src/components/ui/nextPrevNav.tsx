"use client";

import { LinkButton } from "./button";

interface NextItem {
    slug?: string | null;
    title?: string | null;
}

interface NavigationProps {
    collection: {
        docs: NextItem[];
        totalDocs: number;
    };
    currentSlug: string;
    basePath: string;
    label?: string;
    queryString?: string;
}

export function Navigation({ collection, currentSlug, basePath, label, queryString }: NavigationProps) {
    // Get the next item for the link
    const totalCount = collection?.totalDocs || 0;
    const docs = collection?.docs || [];
    
    let nextSlug = '';
    let nextTitle = '';
    let prevSlug = '';
    let prevTitle = '';

    if (totalCount > 1 && docs.length > 0) {   
        const currentIndex = docs.findIndex((p) => p.slug === currentSlug);
        if (currentIndex === -1) return null;

        const nextIndex = (currentIndex + 1) % docs.length;
        const prevIndex = (currentIndex - 1 + docs.length) % docs.length;
        const nextItem = docs[nextIndex];        
        const prevItem = docs[prevIndex];
        nextTitle = nextItem?.title || '';
        nextSlug = nextItem?.slug || '';   
        prevTitle = prevItem?.title || '';
        prevSlug = prevItem?.slug || '';
    }

    if (!nextSlug) return null;

    // Check if previous slug is not the same as the next slug
    const showPreviousLink = Boolean(prevSlug) && prevSlug !== nextSlug;

    const querySuffix = queryString ? `?${queryString}` : '';

    return (
        <section className="bg-(--color-background-dark) w-full mt-[1em] pt-6 pb-24">
            <div className="bold-container">
                <div className="flex flex-col gap-12">
                    {showPreviousLink && (
                        <div className="flex flex-col">
                            <p className="text-gray-400 text-lg md:text-1xl font-normal mb-0!">Previous project</p>
                            <LinkButton href={`${basePath}/${prevSlug}${querySuffix}`} text={`${prevTitle}`} variant="underline" arrow={true} arrowDirection="left" className="text-gray-400 font-bold text-xl! md:text-2xl! my-0!" />
                        </div>
                    )}
                    <div className="flex flex-col">
                        <p className="text-white text-2xl md:text-2xl font-normal mb-0!">{label}</p>
                        <LinkButton href={`${basePath}/${nextSlug}${querySuffix}`} text={`${nextTitle}`} variant="underline" arrow={true} arrowDirection="right" className="text-white font-bold text-2xl! md:text-3xl! my-0!" />
                    </div>
                </div>
            </div>
        </section>
    );
}
