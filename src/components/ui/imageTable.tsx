"use client"

import Image from 'next/image';
import { cn } from '@/lib/utils';
type Media = {
    url?: string | null;
    alt?: string | null;
    width?: number | null;
    height?: number | null;
};

interface ImageTableItem {
    image: string | Media;
}

interface ImageTableProps {
    layout: '1x2' | '1x3' | '1x4' | '2x2' | '2x3' | '2x4' | '3x3' | '3x4' | '4x4';
    images: ImageTableItem[];
    backgroundColor?: 'white' | 'black' | 'gray';
}

export function ImageTable({ layout, images, backgroundColor = 'white' }: ImageTableProps) {
    // Extract rows and columns from layout string (e.g., "2x4" -> rows: 2, cols: 4)
    const [rows, cols] = layout.split('x').map(Number);
    const columns = cols || 4;
    const maxImages = (rows || 1) * columns;

    // Background color mapping
    const bgColorClass = {
        white: 'bg-(--color-background-light)',
        black: 'bg-(--color-background-dark)',
        gray: 'bg-(--color-background-mid)',
    }[backgroundColor];

    // Process images to extract media data and enforce layout limit
    const processedImages = images
        .slice(0, maxImages) // Enforce the layout limit
        .map((item) => {
            const media = typeof item.image === 'object' ? item.image : null;
            if (!media || !media.url) return null;
            
            return {
                url: media.url,
                alt: media.alt || '',
                width: media.width || 1200,
                height: media.height || 800,
            };
        })
        .filter((img): img is NonNullable<typeof img> => img !== null);

    if (processedImages.length === 0) return null;

    return (
        <div className={cn('w-full py-12', bgColorClass)}>
            <div className="bold-container">
                <div className="grid grid-cols-12 gap-6">
                    {processedImages.map((img, index) => (
                        <div 
                            key={index} 
                            className={cn(
                                "relative w-full overflow-hidden rounded-lg bg-gray-200",
                                columns === 4 ? "col-span-6 lg:col-span-3" : 
                                columns === 3 ? "col-span-12 md:col-span-4" :
                                "col-span-12 md:col-span-6"
                            )}
                            style={{ aspectRatio: `${img.width} / ${img.height}` }}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes={
                                    columns === 4 ? "(max-width: 768px) 50vw, 25vw" :
                                    columns === 3 ? "(max-width: 768px) 100vw, 33vw" :
                                    "(max-width: 768px) 100vw, 50vw"
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}