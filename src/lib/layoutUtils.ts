// Layout presets for common content layouts
export const layoutPresets = {
  '12-columns': { colSpan: '12', label: '12 Columns' },
  '11-columns': { colSpan: '11', label: '11 Columns' },
  '10-columns': { colSpan: '10', label: '10 Columns' },
  '9-columns': { colSpan: '9', label: '9 Columns' },
  '8-columns': { colSpan: '8', label: '8 Columns' },
  '7-columns': { colSpan: '7', label: '7 Columns' },
  '6-columns': { colSpan: '6', label: '6 Columns' },
  '5-columns': { colSpan: '5', label: '5 Columns' },
  '4-columns': { colSpan: '4', label: '4 Columns' },
  '3-columns': { colSpan: '3', label: '3 Columns' },
} as const;

export type LayoutPreset = keyof typeof layoutPresets;

// Whitelist mapping for Tailwind classes used in presets
export const colSpanMap: Record<string, string> = {
  '3': 'col-span-12 lg:col-span-3',
  '4': 'col-span-12 lg:col-span-4',
  '5': 'col-span-12 lg:col-span-5',
  '6': 'col-span-12 lg:col-span-6',
  '7': 'col-span-12 lg:col-span-7',
  '8': 'col-span-12 lg:col-span-8',
  '9': 'col-span-12 lg:col-span-9',
  '10': 'col-span-12 lg:col-span-10',
  '11': 'col-span-12 lg:col-span-11',
  '12': 'col-span-12',
};

export const colStartMap: Record<string, string> = {
  '0': '',
  '1': 'lg:col-start-1',
  '2': 'lg:col-start-2',
  '3': 'lg:col-start-3',
  '4': 'lg:col-start-4',
  '5': 'lg:col-start-5',
  '6': 'lg:col-start-6',
  '7': 'lg:col-start-7',
  '8': 'lg:col-start-8',
  '9': 'lg:col-start-9',
  '10': 'lg:col-start-10',
  '11': 'lg:col-start-11',
  '12': 'lg:col-start-12',
};

export const heightMap: Record<string, string> = {
  '0': 'h-0',
  '1': 'h-1',
  '2': 'h-2',
  '3': 'h-3',
  '4': 'h-4',
  '5': 'h-5',
  '6': 'h-6',
  '7': 'h-7',
  '8': 'h-8',
  '9': 'h-9',
  '10': 'h-10',
  '11': 'h-11',
  '12': 'h-12',
  '14': 'h-14',
  '16': 'h-16',
  '20': 'h-20',
  '24': 'h-24',
  '28': 'h-28',
  '32': 'h-32',
  '36': 'h-36',
  '40': 'h-40',
  '44': 'h-44',
}

export const marginTopMap: Record<string, string> = {
  '-15': '[&+*]:!-mt-15',
  '-10': '[&+*]:!-mt-10',
  '0': 'mt-0',
  '1': 'mt-1',
  '2': 'mt-2',
  '3': 'mt-3',
  '4': 'mt-4',
  '5': 'mt-5',
  '6': 'mt-6',
  '7': 'mt-7',
  '8': 'mt-8',
  '9': 'mt-9',
  '10': 'mt-10',
  '11': 'mt-11',
  '12': 'mt-12',
  '14': 'mt-14',
  '16': 'mt-16',
  '20': 'mt-20',
  '24': 'mt-24',
  '28': 'mt-28',
  '32': 'mt-32',
  '36': 'mt-36',
  '40': 'mt-40',
  '44': 'mt-44',
}

export const paddingYMap: Record<string, string> = {
  '0': 'py-0',
  '1': 'py-1',
  '2': 'py-2',
  '3': 'py-3',
  '4': 'py-4',
  '5': 'py-5',
  '6': 'py-6',
  '7': 'py-7',
  '8': 'py-8',
  '9': 'py-9',
  '10': 'py-10',
  '11': 'py-11',
  '12': 'py-12',
  '14': 'py-14',
  '16': 'py-16',
  '20': 'py-20',
  '24': 'py-24',
  '28': 'py-28',
  '32': 'py-32',
  '36': 'py-36',
  '40': 'py-40',
  '44': 'py-44',
}

/* =========================================================
   Color mapping for CSS Vars
========================================================= */

// Build CSS variable reference strings without touching window/document
const cssVar = (name: string) => `var(--${name})`;

// Map selected background token -> text color CSS var
const colorMap: Record<string, string> = {
  black: cssVar('color-white'),
  gray: cssVar('color-black'),
};
export const colorSelectOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Light Gray', value: 'gray' },
];
// Returns text color for a given background token
export function getColorValue(color: string) {
  return colorMap[color] || cssVar('color-black');
}

// Returns CSS variable values for known background color tokens.
export function getBackgroundColorValue(color?: string) {
  if (!color) return undefined;
  if (color.startsWith('#')) return color;

  const backgroundMap: Record<string, string> = {
    black: cssVar('color-black'),
    gray: cssVar('color-gray'),
    white: cssVar('color-white'),
  };

  return backgroundMap[color] || color;
}

// Manual tests for color mapping
// console.log('Testing #252525:', getColorValue('#252525'));
// console.log('Testing #666666:', getColorValue('#666666'));
// console.log('Testing unknown color #FF0000:', getColorValue('#FF0000'));
//npx tsx src/lib/layoutUtils.ts


export interface LayoutProps {
  colSpan?: string;
  colStart?: string;
}

export interface LayoutClasses {
  childClass: string;
}

/**
 * Layout classes for content blocks
 * @param colSpan - Number of columns to span (e.g., '3', '6', '12')
 * @param colStart - Starting column position (e.g., '1', '2', '3')
 * @returns Object with childClass string
 */

export function getLayoutClasses({
  colSpan,
  colStart,
}: LayoutProps): LayoutClasses {

  // Generate child class based on colSpan and colStart
  const spanClass = colSpan ? colSpanMap[colSpan] : '';
  const startClass = colStart ? colStartMap[colStart] : '';
  const childClass = `${spanClass} ${startClass}`;

  return {
    // wrapperClass: baseWrapperClass,
    childClass: childClass,
  };
}

export function getIphoneLayoutClasses({
  colSpan,
  colStart,
}: LayoutProps): LayoutClasses {
  
  const mobileClass = 'col-span-12';  // 12 cols wide
  const tabletClass = 'sm:col-span-6';  // Tablet: 6 cols wide
  
  // Desktop classes based on CMS settings
  const desktopSpanClass = colSpan ? colSpanMap[colSpan] : '';
  const desktopStartClass = colStart && colStart !== '0' ? colStartMap[colStart] : '';
  
  const childClass = [mobileClass, tabletClass, desktopSpanClass, desktopStartClass]
  .filter(Boolean) // Remove empty strings
  .join(' '); // Join with space

  return {
    childClass: childClass,
  };
}