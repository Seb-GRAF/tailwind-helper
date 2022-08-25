/**
 * TYPES
 */

export type FontFamily = {
  class: string
  displayName: string
}

export type FontSize = {
  class: string
  rem?: number
  px?: number
}

export type TextDecoration = {
  class: string
  displayName: string
}

export type DecorationStyle = {
  class: string
  displayName: string
}

export type DecorationThickness = {
  class: string
}

export type Color = {
  class: string
  hex?: string
}

export type BorderRadius = {
  class: string
  rem?: number
  px?: number
}

export type FontWeight = {
  class: string
  weight?: number
}

export interface LetterSpacing {
  class: string
  spacing?: number
}

export type Margin = {
  class: string
  rem?: number
  px?: number
}

export type Padding = {
  class: string
  rem?: number
  px?: number
}

export type Shadow = {
  class: string
}

export type Opacity = {
  class: string
  opacity?: number
}

export type Positioning = {
  class: string
}

export type Placement = {
  class: string
  type?: string
  rem?: number
  px?: number
  percent?: number
}

export type Translate = {
  class: string
  type?: string
  rem?: number
  px?: number
  percent?: number
}

export type GridTemplateColumns = {
  class: string
}

export type GridTemplateRows = {
  class: string
}

export type Gap = {
  class: string
  rem?: number
  px?: number
}

export type ObjectFit = {
  class: string
  displayName: string
}

export type Filter = {
  type: string
  unit?: string
  classes: { class: string; value: number }[]
}

/**
 * TAILWIND CLASSES
 */

export const fontFamilies: FontFamily[] = [
  { class: 'font-sans', displayName: 'Sans' },
  { class: 'font-serif', displayName: 'Serif' },
  { class: 'font-mono', displayName: 'Mono' },
]

export const fontSizes: FontSize[] = [
  { class: 'text-xs', rem: 0.75, px: 12 },
  { class: 'text-sm', rem: 0.875, px: 14 },
  { class: 'text-base', rem: 1, px: 16 },
  { class: 'text-lg', rem: 1.125, px: 18 },
  { class: 'text-xl', rem: 1.25, px: 20 },
  { class: 'text-2xl', rem: 1.5, px: 24 },
  { class: 'text-3xl', rem: 1.875, px: 30 },
  { class: 'text-4xl', rem: 2.25, px: 36 },
  { class: 'text-5xl', rem: 3, px: 48 },
  { class: 'text-6xl', rem: 3.75, px: 60 },
  { class: 'text-7xl', rem: 4.5, px: 72 },
  { class: 'text-8xl', rem: 6, px: 96 },
  { class: 'text-9xl', rem: 8, px: 128 },
]

export const textDecorations: TextDecoration[] = [
  { class: 'no-underline', displayName: 'No underline' },
  { class: 'underline', displayName: 'Underline' },
  { class: 'overline', displayName: 'Overline' },
  { class: 'line-through', displayName: 'Line through' },
]

export const decorationStyles: DecorationStyle[] = [
  { class: 'decoration-solid', displayName: 'Solid' },
  { class: 'decoration-double', displayName: 'Double' },
  { class: 'decoration-dotted', displayName: 'Dotted' },
  { class: 'decoration-dashed', displayName: 'Dashed' },
  { class: 'decoration-wavy', displayName: 'Wavy' },
]

export const decorationThicknesses: DecorationThickness[] = [
  { class: 'decoration-auto' },
  { class: 'decoration-from-font' },
  { class: 'decoration-0' },
  { class: 'decoration-1' },
  { class: 'decoration-2' },
  { class: 'decoration-4' },
  { class: 'decoration-8' },
]

export const colors: Color[] = [
  { class: 'white', hex: '#ffffff' },
  { class: 'black', hex: '#000000' },

  { class: 'slate-50', hex: '#f8fafc' },
  { class: 'slate-100', hex: '#f1f5f9' },
  { class: 'slate-200', hex: '#e2e8f0' },
  { class: 'slate-300', hex: '#cbd5e1' },
  { class: 'slate-400', hex: '#94a3b8' },
  { class: 'slate-500', hex: '#64748b' },
  { class: 'slate-600', hex: '#475569' },
  { class: 'slate-700', hex: '#334155' },
  { class: 'slate-800', hex: '#1e293b' },
  { class: 'slate-900', hex: '#0f172a' },

  { class: 'gray-50', hex: '#f9fafb' },
  { class: 'gray-100', hex: '#f3f4f6' },
  { class: 'gray-200', hex: '#e5e7eb' },
  { class: 'gray-300', hex: '#d1d5db' },
  { class: 'gray-400', hex: '#9ca3af' },
  { class: 'gray-500', hex: '#6b7280' },
  { class: 'gray-600', hex: '#4b5563' },
  { class: 'gray-700', hex: '#374151' },
  { class: 'gray-800', hex: '#1f2937' },
  { class: 'gray-900', hex: '#111827' },

  { class: 'zinc-50', hex: '#fafafa' },
  { class: 'zinc-100', hex: '#f4f4f5' },
  { class: 'zinc-200', hex: '#e4e4e7' },
  { class: 'zinc-300', hex: '#d4d4d8' },
  { class: 'zinc-400', hex: '#a1a1aa' },
  { class: 'zinc-500', hex: '#71717a' },
  { class: 'zinc-600', hex: '#52525b' },
  { class: 'zinc-700', hex: '#3f3f46' },
  { class: 'zinc-800', hex: '#27272a' },
  { class: 'zinc-900', hex: '#18181b' },

  { class: 'neutral-50', hex: '#fafafa' },
  { class: 'neutral-100', hex: '#f5f5f5' },
  { class: 'neutral-200', hex: '#e5e5e5' },
  { class: 'neutral-300', hex: '#d4d4d4' },
  { class: 'neutral-400', hex: '#a3a3a3' },
  { class: 'neutral-500', hex: '#737373' },
  { class: 'neutral-600', hex: '#525252' },
  { class: 'neutral-700', hex: '#404040' },
  { class: 'neutral-800', hex: '#262626' },
  { class: 'neutral-900', hex: '#171717' },

  { class: 'stone-50', hex: '#fafaf9' },
  { class: 'stone-100', hex: '#f5f5f4' },
  { class: 'stone-200', hex: '#e7e5e4' },
  { class: 'stone-300', hex: '#d6d3d1' },
  { class: 'stone-400', hex: '#a8a29e' },
  { class: 'stone-500', hex: '#78716c' },
  { class: 'stone-600', hex: '#57534e' },
  { class: 'stone-700', hex: '#44403c' },
  { class: 'stone-800', hex: '#292524' },
  { class: 'stone-900', hex: '#1c1917' },

  { class: 'red-50', hex: '#fef2f2' },
  { class: 'red-100', hex: '#fee2e2' },
  { class: 'red-200', hex: '#fecaca' },
  { class: 'red-300', hex: '#fca5a5' },
  { class: 'red-400', hex: '#f87171' },
  { class: 'red-500', hex: '#ef4444' },
  { class: 'red-600', hex: '#dc2626' },
  { class: 'red-700', hex: '#b91c1c' },
  { class: 'red-800', hex: '#991b1b' },
  { class: 'red-900', hex: '#7f1d1d' },

  { class: 'orange-50', hex: '#fff7ed' },
  { class: 'orange-100', hex: '#ffedd5' },
  { class: 'orange-200', hex: '#fed7aa' },
  { class: 'orange-300', hex: '#fdba74' },
  { class: 'orange-400', hex: '#fb923c' },
  { class: 'orange-500', hex: '#f97316' },
  { class: 'orange-600', hex: '#ea580c' },
  { class: 'orange-700', hex: '#c2410c' },
  { class: 'orange-800', hex: '#9a3412' },
  { class: 'orange-900', hex: '#7c2d12' },

  { class: 'amber-50', hex: '#fffbeb' },
  { class: 'amber-100', hex: '#fef3c7' },
  { class: 'amber-200', hex: '#fde68a' },
  { class: 'amber-300', hex: '#fcd34d' },
  { class: 'amber-400', hex: '#fbbf24' },
  { class: 'amber-500', hex: '#f59e0b' },
  { class: 'amber-600', hex: '#d97706' },
  { class: 'amber-700', hex: '#b45309' },
  { class: 'amber-800', hex: '#92400e' },
  { class: 'amber-900', hex: '#78350f' },

  { class: 'yellow-50', hex: '#fefce8' },
  { class: 'yellow-100', hex: '#fef9c3' },
  { class: 'yellow-200', hex: '#fef08a' },
  { class: 'yellow-300', hex: '#fde047' },
  { class: 'yellow-400', hex: '#facc15' },
  { class: 'yellow-500', hex: '#eab308' },
  { class: 'yellow-600', hex: '#ca8a04' },
  { class: 'yellow-700', hex: '#a16207' },
  { class: 'yellow-800', hex: '#854d0e' },
  { class: 'yellow-900', hex: '#713f12' },

  { class: 'lime-50', hex: '#f7fee7' },
  { class: 'lime-100', hex: '#ecfccb' },
  { class: 'lime-200', hex: '#d9f99d' },
  { class: 'lime-300', hex: '#bef264' },
  { class: 'lime-400', hex: '#a3e635' },
  { class: 'lime-500', hex: '#84cc16' },
  { class: 'lime-600', hex: '#65a30d' },
  { class: 'lime-700', hex: '#4d7c0f' },
  { class: 'lime-800', hex: '#3f6212' },
  { class: 'lime-900', hex: '#365314' },

  { class: 'green-50', hex: '#f0fdf4' },
  { class: 'green-100', hex: '#dcfce7' },
  { class: 'green-200', hex: '#bbf7d0' },
  { class: 'green-300', hex: '#86efac' },
  { class: 'green-400', hex: '#4ade80' },
  { class: 'green-500', hex: '#22c55e' },
  { class: 'green-600', hex: '#16a34a' },
  { class: 'green-700', hex: '#15803d' },
  { class: 'green-800', hex: '#166534' },
  { class: 'green-900', hex: '#14532d' },

  { class: 'emerald-50', hex: '#ecfdf5' },
  { class: 'emerald-100', hex: '#d1fae5' },
  { class: 'emerald-200', hex: '#a7f3d0' },
  { class: 'emerald-300', hex: '#6ee7b7' },
  { class: 'emerald-400', hex: '#34d399' },
  { class: 'emerald-500', hex: '#10b981' },
  { class: 'emerald-600', hex: '#059669' },
  { class: 'emerald-700', hex: '#047857' },
  { class: 'emerald-800', hex: '#065f46' },
  { class: 'emerald-900', hex: '#064e3b' },

  { class: 'teal-50', hex: '#f0fdfa' },
  { class: 'teal-100', hex: '#ccfbf1' },
  { class: 'teal-200', hex: '#99f6e4' },
  { class: 'teal-300', hex: '#5eead4' },
  { class: 'teal-400', hex: '#2dd4bf' },
  { class: 'teal-500', hex: '#14b8a6' },
  { class: 'teal-600', hex: '#0d9488' },
  { class: 'teal-700', hex: '#0f766e' },
  { class: 'teal-800', hex: '#115e59' },
  { class: 'teal-900', hex: '#134e4a' },

  { class: 'cyan-50', hex: '#ecfeff' },
  { class: 'cyan-100', hex: '#cffafe' },
  { class: 'cyan-200', hex: '#a5f3fc' },
  { class: 'cyan-300', hex: '#67e8f9' },
  { class: 'cyan-400', hex: '#22d3ee' },
  { class: 'cyan-500', hex: '#06b6d4' },
  { class: 'cyan-600', hex: '#0891b2' },
  { class: 'cyan-700', hex: '#0e7490' },
  { class: 'cyan-800', hex: '#155e75' },
  { class: 'cyan-900', hex: '#164e63' },

  { class: 'sky-50', hex: '#f0f9ff' },
  { class: 'sky-100', hex: '#e0f2fe' },
  { class: 'sky-200', hex: '#bae6fd' },
  { class: 'sky-300', hex: '#7dd3fc' },
  { class: 'sky-400', hex: '#38bdf8' },
  { class: 'sky-500', hex: '#0ea5e9' },
  { class: 'sky-600', hex: '#0284c7' },
  { class: 'sky-700', hex: '#0369a1' },
  { class: 'sky-800', hex: '#075985' },
  { class: 'sky-900', hex: '#0c4a6e' },

  { class: 'blue-50', hex: '#eff6ff' },
  { class: 'blue-100', hex: '#dbeafe' },
  { class: 'blue-200', hex: '#bfdbfe' },
  { class: 'blue-300', hex: '#93c5fd' },
  { class: 'blue-400', hex: '#60a5fa' },
  { class: 'blue-500', hex: '#3b82f6' },
  { class: 'blue-600', hex: '#2563eb' },
  { class: 'blue-700', hex: '#1d4ed8' },
  { class: 'blue-800', hex: '#1e40af' },
  { class: 'blue-900', hex: '#1e3a8a' },

  { class: 'indigo-50', hex: '#eef2ff' },
  { class: 'indigo-100', hex: '#e0e7ff' },
  { class: 'indigo-200', hex: '#c7d2fe' },
  { class: 'indigo-300', hex: '#a5b4fc' },
  { class: 'indigo-400', hex: '#818cf8' },
  { class: 'indigo-500', hex: '#6366f1' },
  { class: 'indigo-600', hex: '#4f46e5' },
  { class: 'indigo-700', hex: '#4338ca' },
  { class: 'indigo-800', hex: '#3730a3' },
  { class: 'indigo-900', hex: '#312e81' },

  { class: 'violet-50', hex: '#f5f3ff' },
  { class: 'violet-100', hex: '#ede9fe' },
  { class: 'violet-200', hex: '#ddd6fe' },
  { class: 'violet-300', hex: '#c4b5fd' },
  { class: 'violet-400', hex: '#a78bfa' },
  { class: 'violet-500', hex: '#8b5cf6' },
  { class: 'violet-600', hex: '#7c3aed' },
  { class: 'violet-700', hex: '#6d28d9' },
  { class: 'violet-800', hex: '#5b21b6' },
  { class: 'violet-900', hex: '#4c1d95' },

  { class: 'purple-50', hex: '#faf5ff' },
  { class: 'purple-100', hex: '#f3e8ff' },
  { class: 'purple-200', hex: '#e9d5ff' },
  { class: 'purple-300', hex: '#d8b4fe' },
  { class: 'purple-400', hex: '#c084fc' },
  { class: 'purple-500', hex: '#a855f7' },
  { class: 'purple-600', hex: '#9333ea' },
  { class: 'purple-700', hex: '#7e22ce' },
  { class: 'purple-800', hex: '#6b21a8' },
  { class: 'purple-900', hex: '#581c87' },

  { class: 'fuchsia-50', hex: '#fdf4ff' },
  { class: 'fuchsia-100', hex: '#fae8ff' },
  { class: 'fuchsia-200', hex: '#f5d0fe' },
  { class: 'fuchsia-300', hex: '#f0abfc' },
  { class: 'fuchsia-400', hex: '#e879f9' },
  { class: 'fuchsia-500', hex: '#d946ef' },
  { class: 'fuchsia-600', hex: '#c026d3' },
  { class: 'fuchsia-700', hex: '#a21caf' },
  { class: 'fuchsia-800', hex: '#86198f' },
  { class: 'fuchsia-900', hex: '#701a75' },

  { class: 'pink-50', hex: '#fdf2f8' },
  { class: 'pink-100', hex: '#fce7f3' },
  { class: 'pink-200', hex: '#fbcfe8' },
  { class: 'pink-300', hex: '#f9a8d4' },
  { class: 'pink-400', hex: '#f472b6' },
  { class: 'pink-500', hex: '#ec4899' },
  { class: 'pink-600', hex: '#db2777' },
  { class: 'pink-700', hex: '#be185d' },
  { class: 'pink-800', hex: '#9d174d' },
  { class: 'pink-900', hex: '#831843' },

  { class: 'rose-50', hex: '#fff1f2' },
  { class: 'rose-100', hex: '#ffe4e6' },
  { class: 'rose-200', hex: '#fecdd3' },
  { class: 'rose-300', hex: '#fda4af' },
  { class: 'rose-400', hex: '#fb7185' },
  { class: 'rose-500', hex: '#f43f5e' },
  { class: 'rose-600', hex: '#e11d48' },
  { class: 'rose-700', hex: '#be123c' },
  { class: 'rose-800', hex: '#9f1239' },
  { class: 'rose-900', hex: '#881337' },
]

export const borderRadiuses: BorderRadius[] = [
  { class: '-none', rem: 0, px: 0 },
  { class: '-sm', rem: 0.125, px: 2 },
  { class: '', rem: 0.25, px: 4 },
  { class: '-md', rem: 0.375, px: 6 },
  { class: '-lg', rem: 0.5, px: 8 },
  { class: '-xl', rem: 0.75, px: 12 },
  { class: '-2xl', rem: 1, px: 16 },
  { class: '-3xl', rem: 1.5, px: 24 },
  { class: '-full', rem: 625, px: 9999 },
]

export const fontWeights: FontWeight[] = [
  { class: 'font-thin', weight: 100 },
  { class: 'font-extralight', weight: 200 },
  { class: 'font-light', weight: 300 },
  { class: 'font-normal', weight: 400 },
  { class: 'font-medium', weight: 500 },
  { class: 'font-semibold', weight: 600 },
  { class: 'font-bold', weight: 700 },
  { class: 'font-extrabold', weight: 800 },
  { class: 'font-black', weight: 900 },
]

export const letterSpacings: LetterSpacing[] = [
  { class: 'tracking-tighter', spacing: -0.05 },
  { class: 'tracking-tight', spacing: -0.025 },
  { class: 'tracking-normal', spacing: 0 },
  { class: 'tracking-wide', spacing: 0.025 },
  { class: 'tracking-wider', spacing: 0.05 },
  { class: 'tracking-widest', spacing: 0.1 },
]

export const margins: Margin[] = [
  { class: '0', rem: 0, px: 0 },
  { class: '0.5', rem: 0.125, px: 2 },
  { class: '1', rem: 0.25, px: 4 },
  { class: '1.5', rem: 0.375, px: 6 },
  { class: '2', rem: 0.5, px: 8 },
  { class: '2.5', rem: 0.625, px: 10 },
  { class: '3', rem: 0.75, px: 12 },
  { class: '3.5', rem: 0.875, px: 14 },
  { class: '4', rem: 1, px: 16 },
  { class: '5', rem: 1.25, px: 20 },
  { class: '6', rem: 1.5, px: 24 },
  { class: '8', rem: 2, px: 32 },
  { class: '10', rem: 2.5, px: 40 },
  { class: '11', rem: 2.75, px: 44 },
  { class: '12', rem: 3, px: 48 },
  { class: '14', rem: 3.5, px: 56 },
  { class: '16', rem: 4, px: 64 },
  { class: '20', rem: 5, px: 80 },
  { class: '24', rem: 6, px: 96 },
  { class: '28', rem: 7, px: 112 },
  { class: '32', rem: 8, px: 128 },
  { class: '36', rem: 9, px: 144 },
  { class: '40', rem: 10, px: 160 },
  { class: '44', rem: 11, px: 176 },
  { class: '48', rem: 12, px: 192 },
  { class: '52', rem: 13, px: 208 },
  { class: '56', rem: 14, px: 224 },
  { class: '64', rem: 16, px: 256 },
  { class: '72', rem: 18, px: 288 },
  { class: '80', rem: 20, px: 320 },
  { class: '96', rem: 24, px: 384 },
  { class: 'px', rem: 0.0625, px: 1 },
]

export const paddings: Padding[] = [
  { class: '0', rem: 0, px: 0 },
  { class: '0.5', rem: 0.125, px: 2 },
  { class: '1', rem: 0.25, px: 4 },
  { class: '1.5', rem: 0.375, px: 6 },
  { class: '2', rem: 0.5, px: 8 },
  { class: '2.5', rem: 0.625, px: 10 },
  { class: '3', rem: 0.75, px: 12 },
  { class: '3.5', rem: 0.875, px: 14 },
  { class: '4', rem: 1, px: 16 },
  { class: '5', rem: 1.25, px: 20 },
  { class: '6', rem: 1.5, px: 24 },
  { class: '8', rem: 2, px: 32 },
  { class: '10', rem: 2.5, px: 40 },
  { class: '11', rem: 2.75, px: 44 },
  { class: '12', rem: 3, px: 48 },
  { class: '14', rem: 3.5, px: 56 },
  { class: '16', rem: 4, px: 64 },
  { class: '20', rem: 5, px: 80 },
  { class: '24', rem: 6, px: 96 },
  { class: '28', rem: 7, px: 112 },
  { class: '32', rem: 8, px: 128 },
  { class: '36', rem: 9, px: 144 },
  { class: '40', rem: 10, px: 160 },
  { class: '44', rem: 11, px: 176 },
  { class: '48', rem: 12, px: 192 },
  { class: '52', rem: 13, px: 208 },
  { class: '56', rem: 14, px: 224 },
  { class: '64', rem: 16, px: 256 },
  { class: '72', rem: 18, px: 288 },
  { class: '80', rem: 20, px: 320 },
  { class: '96', rem: 24, px: 384 },
  { class: 'px', rem: 0.0625, px: 1 },
]

export const shadows: Shadow[] = [
  { class: 'shadow-none' },
  { class: 'shadow-inner' },
  { class: 'shadow-sm' },
  { class: 'shadow' },
  { class: 'shadow-md' },
  { class: 'shadow-lg' },
  { class: 'shadow-xl' },
  { class: 'shadow-2xl' },
]

export const opacities: Opacity[] = [
  { class: '0', opacity: 0 },
  { class: '5', opacity: 0.05 },
  { class: '10', opacity: 0.1 },
  { class: '20', opacity: 0.2 },
  { class: '25', opacity: 0.25 },
  { class: '30', opacity: 0.3 },
  { class: '40', opacity: 0.4 },
  { class: '50', opacity: 0.5 },
  { class: '60', opacity: 0.6 },
  { class: '70', opacity: 0.7 },
  { class: '75', opacity: 0.75 },
  { class: '80', opacity: 0.8 },
  { class: '90', opacity: 0.9 },
  { class: '95', opacity: 0.95 },
  { class: '100', opacity: 1 },
]

export const positionings: Positioning[] = [
  { class: 'static' },
  { class: 'relative' },
  { class: 'absolute' },
  { class: 'fixed' },
  { class: 'sticky' },
]

export const placements: Placement[] = [
  { class: '0', type: 'int', rem: 0, px: 0 },
  { class: 'px', type: 'int', rem: 0.0625, px: 1 },
  { class: '0.5', type: 'int', rem: 0.125, px: 2 },
  { class: '1', type: 'int', rem: 0.25, px: 4 },
  { class: '1.5', type: 'int', rem: 0.375, px: 6 },
  { class: '2', type: 'int', rem: 0.5, px: 8 },
  { class: '2.5', type: 'int', rem: 0.625, px: 10 },
  { class: '3', type: 'int', rem: 0.75, px: 12 },
  { class: '3.5', type: 'int', rem: 0.875, px: 14 },
  { class: '4', type: 'int', rem: 1, px: 16 },
  { class: '5', type: 'int', rem: 1.25, px: 20 },
  { class: '6', type: 'int', rem: 1.5, px: 24 },
  { class: '8', type: 'int', rem: 2, px: 32 },
  { class: '10', type: 'int', rem: 2.5, px: 40 },
  { class: '11', type: 'int', rem: 2.75, px: 44 },
  { class: '12', type: 'int', rem: 3, px: 48 },
  { class: '14', type: 'int', rem: 3.5, px: 56 },
  { class: '16', type: 'int', rem: 4, px: 64 },
  { class: '20', type: 'int', rem: 5, px: 80 },
  { class: '24', type: 'int', rem: 6, px: 96 },
  { class: '28', type: 'int', rem: 7, px: 112 },
  { class: '32', type: 'int', rem: 8, px: 128 },
  { class: '36', type: 'int', rem: 9, px: 144 },
  { class: '40', type: 'int', rem: 10, px: 160 },
  { class: '44', type: 'int', rem: 11, px: 176 },
  { class: '48', type: 'int', rem: 12, px: 192 },
  { class: '52', type: 'int', rem: 13, px: 208 },
  { class: '56', type: 'int', rem: 14, px: 224 },
  { class: '64', type: 'int', rem: 16, px: 256 },
  { class: '72', type: 'int', rem: 18, px: 288 },
  { class: '80', type: 'int', rem: 20, px: 320 },
  { class: '96', type: 'int', rem: 24, px: 384 },

  { class: 'full', type: 'fraction', percent: 100 },
  { class: '3/4', type: 'fraction', percent: 75 },
  { class: '2/3', type: 'fraction', percent: 66.666667 },
  { class: '2/4', type: 'fraction', percent: 50 },
  { class: '1/2', type: 'fraction', percent: 50 },
  { class: '1/3', type: 'fraction', percent: 33.333333 },
  { class: '1/4', type: 'fraction', percent: 25 },
  { class: '0', type: 'fraction', percent: 0 },
]

export const translates: Translate[] = [
  { class: '0', type: 'int', rem: 0, px: 0 },
  { class: 'px', type: 'int', rem: 0.0625, px: 1 },
  { class: '0.5', type: 'int', rem: 0.125, px: 2 },
  { class: '1', type: 'int', rem: 0.25, px: 4 },
  { class: '1.5', type: 'int', rem: 0.375, px: 6 },
  { class: '2', type: 'int', rem: 0.5, px: 8 },
  { class: '2.5', type: 'int', rem: 0.625, px: 10 },
  { class: '3', type: 'int', rem: 0.75, px: 12 },
  { class: '3.5', type: 'int', rem: 0.875, px: 14 },
  { class: '4', type: 'int', rem: 1, px: 16 },
  { class: '5', type: 'int', rem: 1.25, px: 20 },
  { class: '6', type: 'int', rem: 1.5, px: 24 },
  { class: '8', type: 'int', rem: 2, px: 32 },
  { class: '10', type: 'int', rem: 2.5, px: 40 },
  { class: '11', type: 'int', rem: 2.75, px: 44 },
  { class: '12', type: 'int', rem: 3, px: 48 },
  { class: '14', type: 'int', rem: 3.5, px: 56 },
  { class: '16', type: 'int', rem: 4, px: 64 },
  { class: '20', type: 'int', rem: 5, px: 80 },
  { class: '24', type: 'int', rem: 6, px: 96 },
  { class: '28', type: 'int', rem: 7, px: 112 },
  { class: '32', type: 'int', rem: 8, px: 128 },
  { class: '36', type: 'int', rem: 9, px: 144 },
  { class: '40', type: 'int', rem: 10, px: 160 },
  { class: '44', type: 'int', rem: 11, px: 176 },
  { class: '48', type: 'int', rem: 12, px: 192 },
  { class: '52', type: 'int', rem: 13, px: 208 },
  { class: '56', type: 'int', rem: 14, px: 224 },
  { class: '64', type: 'int', rem: 16, px: 256 },
  { class: '72', type: 'int', rem: 18, px: 288 },
  { class: '80', type: 'int', rem: 20, px: 320 },
  { class: '96', type: 'int', rem: 24, px: 384 },

  { class: 'full', type: 'fraction', percent: 100 },
  { class: '3/4', type: 'fraction', percent: 75 },
  { class: '2/3', type: 'fraction', percent: 66.666667 },
  { class: '2/4', type: 'fraction', percent: 50 },
  { class: '1/2', type: 'fraction', percent: 50 },
  { class: '1/3', type: 'fraction', percent: 33.333333 },
  { class: '1/4', type: 'fraction', percent: 25 },
  { class: '0', type: 'fraction', percent: 0 },
]

export const gridTemplateColumns: GridTemplateColumns[] = [
  { class: 'grid-cols-1' },
  { class: 'grid-cols-2' },
  { class: 'grid-cols-3' },
  { class: 'grid-cols-4' },
  { class: 'grid-cols-5' },
  { class: 'grid-cols-6' },
  { class: 'grid-cols-7' },
  { class: 'grid-cols-8' },
  { class: 'grid-cols-9' },
  { class: 'grid-cols-10' },
  { class: 'grid-cols-11' },
  { class: 'grid-cols-12' },
]

export const gridTemplateRows: GridTemplateRows[] = [
  { class: 'grid-rows-1' },
  { class: 'grid-rows-2' },
  { class: 'grid-rows-3' },
  { class: 'grid-rows-4' },
  { class: 'grid-rows-5' },
  { class: 'grid-rows-6' },
  { class: 'grid-rows-7' },
  { class: 'grid-rows-8' },
  { class: 'grid-rows-9' },
  { class: 'grid-rows-10' },
  { class: 'grid-rows-11' },
  { class: 'grid-rows-12' },
]

export const gaps: Gap[] = [
  { class: '0', rem: 0, px: 0 },
  { class: '0.5', rem: 0.125, px: 2 },
  { class: '1', rem: 0.25, px: 4 },
  { class: '1.5', rem: 0.375, px: 6 },
  { class: '2', rem: 0.5, px: 8 },
  { class: '2.5', rem: 0.625, px: 10 },
  { class: '3', rem: 0.75, px: 12 },
  { class: '3.5', rem: 0.875, px: 14 },
  { class: '4', rem: 1, px: 16 },
  { class: '5', rem: 1.25, px: 20 },
  { class: '6', rem: 1.5, px: 24 },
  { class: '8', rem: 2, px: 32 },
  { class: '10', rem: 2.5, px: 40 },
  { class: '11', rem: 2.75, px: 44 },
  { class: '12', rem: 3, px: 48 },
  { class: '14', rem: 3.5, px: 56 },
  { class: '16', rem: 4, px: 64 },
  { class: '20', rem: 5, px: 80 },
  { class: '24', rem: 6, px: 96 },
  { class: '28', rem: 7, px: 112 },
  { class: '32', rem: 8, px: 128 },
  { class: '36', rem: 9, px: 144 },
  { class: '40', rem: 10, px: 160 },
  { class: '44', rem: 11, px: 176 },
  { class: '48', rem: 12, px: 192 },
  { class: '52', rem: 13, px: 208 },
  { class: '56', rem: 14, px: 224 },
  { class: '64', rem: 16, px: 256 },
  { class: '72', rem: 18, px: 288 },
  { class: '80', rem: 20, px: 320 },
  { class: '96', rem: 24, px: 384 },
  { class: 'px', rem: 0.0625, px: 1 },
]

export const objectFits: ObjectFit[] = [
  { class: 'object-fill', displayName: 'Fill' },
  { class: 'object-contain', displayName: 'Contain' },
  { class: 'object-cover', displayName: 'Cover' },
  { class: 'object-scale-down', displayName: 'Scale Down' },
  { class: 'object-none', displayName: 'None' },
]

export const filters: Filter[] = [
  {
    type: 'blur',
    unit: 'px',
    classes: [
      {
        class: 'blur-none',
        value: 0,
      },
      {
        class: 'blur-sm',
        value: 4,
      },
      {
        class: 'blur',
        value: 8,
      },
      {
        class: 'blur-md',
        value: 12,
      },
      {
        class: 'blur-lg',
        value: 16,
      },
      {
        class: 'blur-xl',
        value: 24,
      },
      {
        class: 'blur-2xl',
        value: 40,
      },
      {
        class: 'blur-3xl',
        value: 64,
      },
    ],
  },

  {
    type: 'brightness',
    classes: [
      { class: 'brightness-0', value: 0 },
      { class: 'brightness-50', value: 0.5 },
      { class: 'brightness-75', value: 0.75 },
      { class: 'brightness-90', value: 0.9 },
      { class: 'brightness-95', value: 0.95 },
      { class: 'brightness-100', value: 1 },
      { class: 'brightness-105', value: 1.05 },
      { class: 'brightness-110', value: 1.1 },
      { class: 'brightness-125', value: 1.25 },
      { class: 'brightness-150', value: 1.5 },
      { class: 'brightness-200', value: 2 },
    ],
  },

  {
    type: 'contrast',
    classes: [
      { class: 'contrast-0', value: 0 },
      { class: 'contrast-50', value: 0.5 },
      { class: 'contrast-75', value: 0.75 },
      { class: 'contrast-100', value: 1 },
      { class: 'contrast-125', value: 1.25 },
      { class: 'contrast-150', value: 1.5 },
      { class: 'contrast-200', value: 2 },
    ],
  },

  {
    type: 'grayscale',
    unit: '%',
    classes: [
      {
        class: 'grayscale-0',
        value: 0,
      },
      {
        class: 'grayscale',
        value: 100,
      },
    ],
  },

  {
    type: 'hue rotate',
    unit: 'deg',
    classes: [
      {
        class: 'hue-rotate-0',
        value: 0,
      },
      {
        class: 'hue-rotate-15',
        value: 15,
      },
      {
        class: 'hue-rotate-30',
        value: 30,
      },
      {
        class: 'hue-rotate-60',
        value: 60,
      },
      {
        class: 'hue-rotate-90',
        value: 90,
      },
      {
        class: 'hue-rotate-180',
        value: 180,
      },
    ],
  },

  {
    type: 'invert',
    unit: '%',
    classes: [
      {
        class: 'invert-0',
        value: 0,
      },
      {
        class: 'invert',
        value: 100,
      },
    ],
  },

  {
    type: 'saturate',
    classes: [
      { class: 'saturate-0', value: 0 },
      { class: 'saturate-50', value: 0.5 },
      { class: 'saturate-100', value: 1 },
      { class: 'saturate-150', value: 1.5 },
      { class: 'saturate-200', value: 2 },
    ],
  },

  {
    type: 'sepia',
    unit: '%',
    classes: [
      {
        class: 'sepia-0',
        value: 0,
      },
      {
        class: 'sepia',
        value: 100,
      },
    ],
  },
]
