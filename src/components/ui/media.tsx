"use client";

import { cn } from "@/lib/utils";
import { getLayoutClasses, LayoutProps } from "@/lib/layoutUtils";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

interface SingleImageProps extends LayoutProps { 
    type: "image"; 
    src: string;
    alt?: string;
    caption?: ReactNode;
    imgWidth?: number;
    imgHeight?: number;
    aspectRatio?: string;
    insideGrid?: boolean;
}

interface SingleVideoProps extends LayoutProps {
    type: "video";
    src: string;
    aria?: string;
}

interface SingleVimeoProps extends LayoutProps {
    type: "vimeo";
    src: string;
    aspectRatio?: string;
}

type SingleMediaProps = SingleImageProps | SingleVideoProps | SingleVimeoProps;

export function SingleMedia(props: SingleMediaProps) {
    const { colSpan, colStart } = props;
    const { childClass } = getLayoutClasses({ colSpan, colStart });
    const videoRef = useRef<HTMLVideoElement>(null);

    // Get aspect ratio for images and vimeo
    const aspectRatio = (props.type === "image" || props.type === "vimeo") ? props.aspectRatio : undefined;
    const hasCustomAspect = aspectRatio && aspectRatio !== 'auto';

    // Helper to extract Vimeo ID and parameters
    const getVimeoEmbedUrl = (url: string) => {
        const idMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
        const id = idMatch ? idMatch[3] : null;
        if (!id) return null;

        // Extract existing params if any
        const paramsMatch = url.match(/\?(.+)/);
        const existingParams = paramsMatch ? paramsMatch[1] : '';

        // Base URL
        let embedUrl = `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`;

        // Add existing params if they don't conflict or just append them
        if (existingParams) {
            // Check if existingParams already has things we added
            embedUrl += `&${existingParams}`;
        }

        return embedUrl;
    };

    // Render content
    return (
        <div className={cn("", childClass, hasCustomAspect ? aspectRatio : '', )}>
            {props.type === "image" && props.imgWidth && props.imgHeight ? (
                <figure>
                    <Image 
                        src={props.src} 
                        alt={props.alt || ''} 
                        width={props.imgWidth}
                        height={props.imgHeight}
                        className={cn("lg:my-0 object-cover w-full", hasCustomAspect ? "h-full" : "")}
                    />
                    {props.caption && (
                        <figcaption className={cn("richtext", props.insideGrid ? "max-w-8/12" : "max-w-4/12")}>
                            {props.caption}
                        </figcaption>
                    )}
                </figure>
            ) : props.type === "video" ? (
                <video 
                    ref={videoRef}
                    src={props.src} 
                    aria-label={props.aria} 
                    // controls
                    muted
                    playsInline
                    className="aspect-video w-full"
                    onMouseEnter={() => void videoRef.current?.play()}
                    onMouseLeave={() => {
                      const v = videoRef.current;
                      if (!v) return;
                      v.pause();
                      v.currentTime = 0; // optional
                    }}
                />
            ) : props.type === "vimeo" ? (
                <div className={cn("relative w-full",  hasCustomAspect ? "h-full" : "aspect-video" )}>
                    <iframe
                        src={getVimeoEmbedUrl(props.src) || ''}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        className="absolute top-0 left-0 w-full aspect-video"
                        title="Vimeo Video"
                    ></iframe>
                </div>
            ) : null}
        </div>
    );
}