"use client";

import { heightMap, marginTopMap } from '@/lib/layoutUtils'

interface SpaceMagicProps {
  height: string; 
  margin: string; 
  backgroundColor: string;
}

export function SpaceMagic({ height, margin, backgroundColor }: SpaceMagicProps) {
  const heightClass = heightMap[height] ?? 'h-0'
  const marginClass = marginTopMap[margin] ?? 'mt-0'

  return <div className={`${heightClass} ${marginClass} bg-${backgroundColor}`} />
}