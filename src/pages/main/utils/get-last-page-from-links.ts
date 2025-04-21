export const getLastPageFromLinks = (links: string | null): number => {
  if (!links) return 1;

  const lastPageMatch = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>;\srel="last"/);

  if (!lastPageMatch || !lastPageMatch[1]) return 1;

  return Number(lastPageMatch[1]);
};
