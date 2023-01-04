export const getLocaleDate = (date: Date): string => {
  return date.toLocaleDateString(['fr'], {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};
