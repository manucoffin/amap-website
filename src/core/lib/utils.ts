export const truncateText = (str: string, length: number): string => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};

export const isProduction = process.env.NODE_ENV === 'production';
