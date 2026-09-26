'use client';

interface HeroReelProps {
    videoUrl: string;
    videoTitle: string;
    videoDescription: string;
    videoWatchLink: string;
    videoReadLink: string;
}

export function Video({ videoUrl, videoTitle, videoDescription, videoWatchLink, videoReadLink }: HeroReelProps) {
    return (
        <>
        <section id="hero-reel">
          <figure className="mb-0">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                title={videoTitle}
                allow="fullscreen; picture-in-picture; autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <figcaption id="hero-reel-caption" className="sr-only">
              {videoDescription} 
              <a href={videoWatchLink}>Watch on Vimeo</a>
              <span aria-hidden="true"> · </span>
              <a href={videoReadLink}>Read transcript</a>
            </figcaption>
          </figure>
        </section>
        </>
    );
}