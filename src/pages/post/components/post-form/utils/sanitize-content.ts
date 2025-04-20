export const sanitizeContent = (content: string): string => {
  return content
    .replace(/<(script|style|iframe|object|embed|meta|link)[^>]*>.*?<\/\1>/gis, "")
    .replace(/<(script|style|iframe|object|embed|meta|link)[^>]*\/?>/gi, "")

    .replace(/&[a-z]+;/gi, "")

    .replace(/<div><br><\/div>/g, "\n\n")
    .replace(/<div>/g, "\n")
    .replace(/<\/div>/g, "")
    .replace(/<br\s*\/?>/gi, "\n")

    .replace(/<[^>]+>/g, "")

    .trim();
};
