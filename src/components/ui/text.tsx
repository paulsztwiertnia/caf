"use client";

import React from "react";
import { pVariants } from '@/lib/variants'

interface TextBlockProps {
  heading?: string | null;
  richText?: React.ReactNode;
  collectionType?: 'projects';
  className?: string;
}

export function TextColumn({ richText }: TextBlockProps) {
    const columnClass = `col-span-12 xl:col-span-8 richtext ${pVariants({ role: "projectTextBlock" })}`;

    return (
        <div className={`${columnClass}`}>
            {richText}
        </div>
    );
}
