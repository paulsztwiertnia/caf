'use client';

import Image from 'next/image';

import { LinkButton } from './button';

interface CtaImageProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export function CtaImage({ imgSrc, imgAlt, heading, description, buttonText, buttonLink }: CtaImageProps) {
    return (
        <>
         <section className="grid grid-cols-1 md:grid-cols-12 min-h-[50vh] lg:h-[800px]">
            <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-start px-6 md:px-4 py-12 md:py-0 order-2 md:order-1">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{heading}</h3>
                <p className="text-base md:text-lg mb-6 ps-1">{description}</p>
                <LinkButton href={buttonLink} text={buttonText} variant="underline" arrow={true} />
            </div>
            <div className="col-span-1 md:col-span-7 relative min-h-[300px] md:min-h-0 order-1 md:order-2">
                <Image src={imgSrc} alt={imgAlt} width={850} height={850} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-white via-white/50 to-transparent pointer-events-none h-[30%] md:h-full md:w-[30%] hidden md:block"></div>
            </div>
        </section>
    </>
    );
}