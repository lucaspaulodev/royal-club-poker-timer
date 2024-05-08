export const ensureNonNegativeValue = (value: string | null): number => {
    const parsedValue = parseInt(value || '0', 10);
    return isNaN(parsedValue) ? 0 : Math.max(parsedValue, 0);
};