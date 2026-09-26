"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hVariants, pVariants } from '@/lib/variants';
import { cn } from '@/lib/utils';
import { LinkButton } from './button';

// Project grid layout configuration
// Pattern repeats every 10 projects: 4-8-4-4-4-4-4-4-4-8
// Creates a visual rhythm with most projects at 1/3 width and occasional larger featured items at 2/3 width
const PROJECT_LAYOUT_PATTERN = [8, 4, 4, 4, 4, 4, 4, 4, 4, 8] as const;
const PROJECT_ASPECT_RATIO = 1.66667; // Golden Ratio

// Map column spans to Tailwind classes (explicit for proper CSS generation)
const COL_SPAN_CLASSES: Record<number, string> = {
  4: 'md:col-span-4',
  8: 'md:col-span-8',
} as const;

interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
}

interface Project {
  thumbnailSrc: string;
  videoSrc: string;
  vimeoUrl: string;
  link: string;
  tags: Tag[];
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
  videoTransition: boolean;
}

interface ProjectShowcaseProps {
  featuredProjects: Project[];
  maxProjects: number;
  queryString?: string;
}

interface ProjectMediaProps {
  project: Project;
}

export const ProjectShowcaseSkeleton = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="w-full h-140 bg-gray-200 animate-pulse"></div>
        </div>
        <div className="col-span-12 md:col-span-6 pt-24">
          <div className="w-full h-140 bg-gray-200 animate-pulse"></div>
        </div>  
        <div className="col-span-12 md:col-span-8">
          <div className="w-full h-140 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({ project }: ProjectMediaProps) {
  const [isActive, setIsActive] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasThumbnail = Boolean(project.thumbnailSrc);
  const hasVideo = Boolean(project.videoSrc); // If there is a video, use it as the thumbnail
  const usesVideoAsThumbnail = !hasThumbnail && hasVideo; // If there is no thumbnail, use the video as the thumbnail
  const useOpacityTransition = hasVideo && project.videoTransition; // Only use opacity transition if video transition is enabled

  const startPlayback = () => {
    setIsActive(true);
    if (videoRef.current) {
      setIsVideoReady(videoRef.current.readyState >= 2);
      void videoRef.current.play();
    }
  };

  const stopPlayback = () => {
    setIsActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      if (usesVideoAsThumbnail) videoRef.current.currentTime = 0;
    }
  };

  const handleMouseEnter = () => { if (hasVideo) startPlayback(); };
  const handleMouseLeave = () => { if (hasVideo) stopPlayback(); };

  const handleMobileButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isActive) { stopPlayback(); } else { startPlayback(); }
  };

  return (
    <div
      className="relative overflow-hidden w-full mb-4"
      style={{ aspectRatio: PROJECT_ASPECT_RATIO }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile play/stop button — hidden on desktop where hover takes over */}
      {hasVideo && (
        <button
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 lg:hidden",
            "p-1 bg-(--color-black)/20 rounded-full transition-transform duration-200 active:scale-95",
          )}
          aria-label={isActive ? "Stop video" : "Play video"}
          onClick={handleMobileButtonClick}
        >
          {isActive ? (
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0.5" y="0.5" width="89.4908" height="89.4908" rx="44.7454" strokeWidth="1.19231" stroke="white" />
              <line x1="32" y1="32" x2="59" y2="59" stroke="white" strokeWidth="1.19231" strokeLinecap="round" />
              <line x1="59" y1="32" x2="32" y2="59" stroke="white" strokeWidth="1.19231" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0.5" y="0.5" width="89.4908" height="89.4908" rx="44.7454" strokeWidth="1.19231" stroke="white" />
              <path d="M63.798 44.706L34.5962 61.384L34.5962 28.027L63.798 44.706Z" stroke="white" strokeWidth="1.19231" />
            </svg>
          )}
        </button>
      )}
      {hasThumbnail && (
        <Image
          src={project.thumbnailSrc}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            hasVideo
              ? (isActive && isVideoReady ? "opacity-0" : "opacity-100")
              : "hover:scale-105",
          )}
        />
      )}
      {hasVideo && (
        <video
          ref={videoRef}
          src={project.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            useOpacityTransition && "transition-opacity duration-300",
            usesVideoAsThumbnail ? "opacity-100" : (isActive && isVideoReady ? "opacity-100" : "opacity-0"),
          )}
          onCanPlay={() => setIsVideoReady(true)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export function ProjectShowcase({ featuredProjects, maxProjects, queryString }: ProjectShowcaseProps) {

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-12 gap-y-12 md:gap-y-16">
        {featuredProjects.slice(0, maxProjects ).map((project, index) => {
          // Get the col-span from the layout pattern (cycles through the pattern)
          const colSpan = PROJECT_LAYOUT_PATTERN[index % PROJECT_LAYOUT_PATTERN.length];
          const colSpanClass = COL_SPAN_CLASSES[colSpan];

          return (
            <div key={project.link} className={cn("col-span-12", colSpanClass)}>
              <Link href={`/projects/${project.link}${queryString ? `?${queryString}` : ''}`} className="w-full block">
                <ProjectMedia project={project} />
              </Link>
              <div className="flex flex-col justify-between">
                <h3 className={hVariants({ role: "workCardTitle" })}>
                  {project.title}
                </h3>
                <p className={pVariants({ role: "cardDescription" })}>
                  {project.description}
                </p>
                <LinkButton href={`/projects/${project.link}${queryString ? `?${queryString}` : ''}`} className="flex lg:hidden" text="View project" arrow={true} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
