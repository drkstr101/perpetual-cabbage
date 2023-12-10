/**
 * Convert a date string from input format to display format
 *
 * @param dateString A string in the format of YYYY-MM-DD
 * @returns A localized date string
 */
export function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
