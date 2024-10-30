export const win = typeof window !== "undefined" ? window : undefined;
export const width = win?.innerWidth || 0;
export const height = win?.innerHeight || 0;
export const isMobile = width < 768;
export const isDesktop = !isMobile;
