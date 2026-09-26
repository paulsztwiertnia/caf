'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './swiper.module.css';
import Image from 'next/image';
import { LinkButton } from './button';
import { hVariants } from '@/lib/variants';

// Define types for slide
interface SwiperSlideProps {
    textColor: string;
    backgroundColor: string;
    category: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    imageAlt: string;
}


interface SwiperProps {
    slides: SwiperSlideProps[]; //Array of slide objects
    base?: boolean;
}

const swiperSlideSizing = "h-full md:h-[100vh] lg:max-h-[75vh] xl:max-h-[65vh] 2xl:max-h-[800px] 3xl:max-h-[1000px] [@media(orientation:landscape)]:min-h-[450px]";

export function SwiperSlider({ slides }: SwiperProps) {

    return (
        <>
        <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            speed={600}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }}
            pagination={{
            el: '.swiper-pagination',
            clickable: true,
            }}
            className="w-full h-full flex align-items-center relative text-white"
            >

            {/* Slides */}
            {slides.map((slide, index) => (
                <SwiperSlide 
                    key={index}
                    style={{ backgroundColor: slide.backgroundColor }}
                    className="h-full"
                >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${swiperSlideSizing}`}>
                        <div className="order-2 grid grid-cols-12 gap-y-2 items-start mb-auto">
                            <div className="pt-8 lg:pt-24 col-span-10 col-start-2 justify-start">
                                <h2 className={hVariants({ role: "pageSection" })}>{slide.category}</h2>
                                <h3 className={hVariants({ role: "caseStudySliderTitle" })}>{slide.title}</h3>
                                <p className="text-xl w-11/12">{slide.description}</p>
                            </div>                                
                            <div className="col-span-6 lg:col-span-4 col-start-2 lg:col-start-2">
                                <LinkButton
                                    href={slide.buttonLink}
                                    text={slide.buttonText}
                                    alt={slide.buttonText}
                                    variant="light"
                                    className="w-full flex justify-center"
                                />   
                            </div>
                        </div>
                        <div className={`order-1 relative min-h-[650px] lg:min-h-0`}>
                        <Image 
                            className="object-cover"
                            src={slide.imageSrc}
                            alt={slide.imageAlt}
                            fill
                            unoptimized
                        />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        {/* Navigation Controls */}
        <div 
            className={`${styles.root} swiper-controls-wrapper transition-opacity duration-100 flex align-items-center justify-center`}
        >
            <div className="flex items-center gap-2">
                <button type="button" style={{ position: 'unset', color: '#000', height: '1rem', width: '1rem', marginTop: '0', paddingTop: '5px'}} className="swiper-button-prev"></button>
                <div style={{ position: 'unset'}} className="swiper-pagination space-x-2 w-max"></div>
                <button type="button" style={{ position: 'unset', color: '#000', height: '1rem', width: '1rem', marginTop: '0', paddingTop: '5px'}} className="swiper-button-next"></button>
            </div>
        </div>
    </>
    )
}
