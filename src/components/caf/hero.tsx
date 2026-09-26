"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CafButton } from "@/components/caf/ui";

const slides: Array<{
    image: string;
    title: string;
    text?: string;
    kicker?: string;
    href?: string;
    cta?: string;
}> = [
    {
        image: "/caf/toronto.jpg",
        title: "Canadian Arab Federation",
        text: "Established in 1967, the Canadian Arab Federation is a national, non-partisan, non-profit and membership based organization",
    },
    {
        image: "/caf/morocco-3.png",
        kicker: "Morocco Earthquake",
        title: "Canadian Arab Federation & The Moroccan Community of Canada Unite in Crisis",
        href: "/morocco-earthquake",
        cta: "Learn More",
    },
    {
        image: "/caf/gaza.jpg",
        kicker: "Israel - Gaza Conflict",
        title: "Israel continues attack on northern Gaza as 800,000 have fled south",
        href: "/our-call-to-action",
        cta: "Learn More",
    },
];

export function HomeHero() {
    const [index, setIndex] = useState(0);
    const slide = slides[index];

    const go = (direction: number) => {
        setIndex((current) => (current + direction + slides.length) % slides.length);
    };

    return (
        <section className="relative isolate h-[28rem] overflow-hidden text-white md:h-[32rem]">
            <Image
                src={slide.image}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 md:left-6"
            >
                <ChevronLeft className="size-8" />
            </button>
            <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 md:right-6"
            >
                <ChevronRight className="size-8" />
            </button>
            <div className="absolute inset-0 z-10 flex items-center justify-center px-14 text-center">
            <div className="max-w-4xl">
                {slide.kicker && (
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{slide.kicker}</p>
                )}
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{slide.title}</h1>
                {slide.text && (
                    <p className="mx-auto mt-4 max-w-3xl text-sm text-white/90 md:text-base">{slide.text}</p>
                )}
                {slide.href && slide.cta && (
                    <div className="mt-6">
                        <CafButton href={slide.href}>{slide.cta}</CafButton>
                    </div>
                )}
            </div>
            </div>
        </section>
    );
}
