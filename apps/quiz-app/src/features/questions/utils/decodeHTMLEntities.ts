export function decodeHTMLEntities(str: string) {
  return str
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
}
