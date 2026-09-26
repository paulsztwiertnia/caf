"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { pVariants } from '@/lib/variants';
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import { ActionButton, LinkButton } from '@/components/ui/button';

interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
}

interface ProjectFiltersProps {
  projectTags: Tag[];
  selectedTagData: Tag | null;
}

export function ProjectFilters({ projectTags, selectedTagData }: ProjectFiltersProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // Get tag from URL, runs everytime url changes
  useEffect(() => {
    const tagFromUrl = searchParams.get('tag');
    setSelectedTag(tagFromUrl);
  }, [searchParams]);

  return (
    <>
      {/* Tag Filter Buttons */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <div className="shrink-0">
            <LinkButton text="All" href="/projects" variant="underline" className="text-sm group relative hover:cursor-pointer my-0!" />
          </div>
          {projectTags.map((tag: Tag) => (
            <div key={tag.id} className="flex items-center">
              <span aria-hidden="true" className="inline-block h-4 border-l border-black me-2"></span>
              <LinkButton text={tag.name} href={`/projects?tag=${tag.slug}`} variant="underline" className="text-sm group relative hover:cursor-pointer my-0!" />
            </div>
          ))}

          {/* Only show if a tag is selected */}
          {selectedTag && (
            <div className="basis-full sm:basis-auto ml-0 md:ml-6">
              <LinkButton text="Clear Filters" href="/projects" variant="underline" className="text-sm group relative hover:cursor-pointer my-0!" />
            </div>
          )}
        </div>

        {/* Info Button */}
        <div
          className={cn(
            "shrink-0 self-start md:self-auto",
            !selectedTag && "hidden md:block md:invisible md:pointer-events-none"
          )}
          aria-hidden={!selectedTag}
        >
          <ActionButton
            text="Info"
            variant="underline"
            className="text-xl my-0! capitalize! flex flex-row gap-2 items-center group relative hover:cursor-pointer"
            disabled={!selectedTag}
            onClick={() => selectedTag && setShowInfo(!showInfo)}
          >
            {showInfo ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
          </ActionButton>
        </div>
      </div>
      
      <div 
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          selectedTagData?.description && showInfo 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 mt-0"
        )}
      >  
        {selectedTagData?.description && (
          <p className={pVariants({ role: "pageDescription" })}>{selectedTagData.description}</p>
        )}
      </div>
    </>
  );
}
