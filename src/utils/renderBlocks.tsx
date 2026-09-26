import React from 'react'
import { TextColumn } from '@/components/ui/text'
import { SingleMedia } from '@/components/ui/media'
import { Cta } from '@/components/ui/cta'
import { getColorValue, getLayoutClasses, paddingYMap } from '@/lib/layoutUtils'
import { ImageTable } from '@/components/ui/imageTable'
import { SpaceMagic } from '@/components/ui/spaceMagic'

export type MediaAsset = {
    url?: string | null;
    alt?: string | null;
    mimeType?: string | null;
    width?: number | null;
    height?: number | null;
    caption?: React.ReactNode;
};

export type ContentBlock = {
    blockType: string;
    text?: string | null;
    richText?: React.ReactNode;
    colSpan?: string | null;
    colStart?: string | null;
    aspectRatio?: string | null;
    mediaType?: string | null;
    vimeoUrl?: string | null;
    singleMedia?: MediaAsset | string | null;
    content?: ContentBlock[] | null;
    backgroundColor?: string | null;
    paddingY?: string | null;
    customUrl?: string | null;
    heading?: string | null;
    buttonText?: string | null;
    variant?: 1 | 2 | 3 | null;
    images?: { image: string | MediaAsset }[] | null;
    layout?: string | null;
    height?: string | null;
    margin?: string | null;
};

export type AllContentBlocks = ContentBlock[];

// Helper function to render recursive blocks 
export function renderBlocks(
    blocks: AllContentBlocks, 
    projectTitle: string, 
    collectionType: 'projects',
    insideGrid = false
): React.ReactNode[] {
    if (!blocks) return [];
    
    return blocks.map((block, index) => {
        if (!block) return null;
        
        switch (block.blockType) {
            case 'textBlock': {
                const textBlock = (
                    <TextColumn
                        key={index}
                        richText={block.richText}
                        collectionType={collectionType}
                    />
                );
                return insideGrid ? textBlock : (
                    <div key={index} className="grid grid-cols-12 my-3 lg:my-10 ">
                        {textBlock}
                    </div>
                );
            }
            case 'singleMedia': {
                const mediaType = block.mediaType || 'upload';
                
                if (mediaType === 'vimeo' && block.vimeoUrl) {
                    const mediaBlock = (
                        <SingleMedia
                            key={index}
                            type="vimeo"
                            src={block.vimeoUrl}
                            colSpan={block.colSpan ?? undefined}
                            colStart={block.colStart ?? undefined}
                            aspectRatio={block.aspectRatio ?? undefined}
                        />
                    );
                    
                    return insideGrid ? mediaBlock : (
                        <div key={index} className="grid grid-cols-12">
                            {mediaBlock}
                        </div>
                    );
                }

                const media = typeof block.singleMedia === 'object' ? block.singleMedia : null;
                if (!media) return null;
                
                const type = media.mimeType?.startsWith('video/') ? 'video' : 'image';
                
                const mediaBlock = (
                    <SingleMedia
                        key={index}
                        type={type}
                        src={media.url || ''}
                        alt={media.alt || projectTitle}
                        caption={media.caption}
                        {...(type === 'image' && media.width && media.height && { 
                            imgWidth: media.width, 
                            imgHeight: media.height 
                        })}
                        {...(type === 'image' && block.aspectRatio && {
                            aspectRatio: block.aspectRatio
                        })}
                        colSpan={block.colSpan ?? undefined}
                        colStart={block.colStart ?? undefined}
                        insideGrid={insideGrid}
                    />
                );
                
                return insideGrid ? mediaBlock : (
                    <div key={index} className="grid grid-cols-12">
                        {mediaBlock}
                    </div>
                );
            }
            case 'recursiveComponent': {
                if (!block.content || block.content.length === 0) return null;

                const backgroundColor = block.backgroundColor ?? undefined;
                const textColor = backgroundColor ? getColorValue(backgroundColor) : undefined;
                
                // Get layout classes if inside a grid
                const nestedBlock = block as typeof block & {
                    colSpan?: string | null;
                    colStart?: string | null;
                    paddingY?: string | null;
                };

                const paddingYClass = nestedBlock.paddingY
                    ? (paddingYMap[nestedBlock.paddingY] ?? '')
                    : '';

                const { childClass } = insideGrid ? getLayoutClasses({ 
                    colSpan: nestedBlock.colSpan ?? undefined, 
                    colStart: nestedBlock.colStart ?? undefined 
                }) : { childClass: '' };
                
                // Nested grid (inside another grid) - needs positioning classes
                if (insideGrid) {
                    return (
                        <div key={index} className={childClass}>
                            <div 
                                className={`grid grid-cols-12 h-full ${paddingYClass}`} 
                                style={backgroundColor ? { backgroundColor, color: textColor } : undefined}
                            >
                                {renderBlocks(block.content, projectTitle, collectionType, true)}
                            </div>
                        </div>
                    );
                }
                
                // Top-level grid - with background color
                if (backgroundColor) {
                    return(
                        <div key={index} style={{ backgroundColor, color: textColor}} className="w-screen relative left-1/2 -translate-x-1/2">
                            <div key={index} className={`bold-container grid grid-cols-12 ${paddingYClass}`}>
                                {renderBlocks(block.content, projectTitle, collectionType, true)}
                            </div>
                        </div>
                    );
                }
                
                // Top-level grid - no background color
                return(
                    <div key={index} className={`grid grid-cols-12 ${paddingYClass}`.trim()}>
                        {renderBlocks(block.content, projectTitle, collectionType, true)}
                    </div>
                );
            }
            case 'CallToAction': {
                let buttonLink: string | null = null;
              
                if (block.customUrl) {
                  buttonLink = block.customUrl;
                }
              
                if (!block.heading && !block.text && !buttonLink) return null;
              
                return (
                  <Cta
                    key={index}
                    heading={block.heading || ''}
                    text={block.text || ''}
                    buttonText={block.buttonText || ''}
                    buttonLink={buttonLink || undefined}
                    variant={block.variant as 1 | 2 | 3 | null}
                  />
                );
              }
            case 'imageTable': {
                if (!block.images || block.images.length === 0) return null;
                
                return (
                    <ImageTable
                        key={index}
                        layout={block.layout as '1x4' | '2x4' | '3x4' | '4x4'}
                        images={block.images}
                        backgroundColor={block.backgroundColor as 'white' | 'black' | 'gray'}
                    />
                );
            }
            case 'spaceMagic': {
                return (
                    <SpaceMagic
                        key={index}
                        height={block.height as string}
                        margin={block.margin as string}
                        backgroundColor={block.backgroundColor as 'white' | 'black' | 'gray'}
                    />
                );
            }
            default:
                return null
        }
    });
}
