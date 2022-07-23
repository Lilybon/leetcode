const TINYURL_HOST = 'https://tinyurl.com/',
  SHORT_PATH_LENGTH = 6,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  shortPath2LongUrl = new Map(),
  longUrl2ShortPath = new Map()

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

export function encode(longUrl) {
  if (longUrl2ShortPath.has(longUrl)) {
    return TINYURL_HOST + longUrl2ShortPath.get(longUrl)
  }
  let shortPath = ''
  for (let i = 0; i < SHORT_PATH_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    shortPath += chars[randomIndex]
  }
  let index = 0
  while (shortPath2LongUrl.has(shortPath)) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    shortPath =
      shortPath.splice(0, index) +
      chars[randomIndex] +
      shortPath.splice(index + 1)
  }
  shortPath2LongUrl.set(shortPath, longUrl)
  longUrl2ShortPath.set(longUrl, shortPath)
  return TINYURL_HOST + shortPath
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

export function decode(shortUrl) {
  const shortPath = shortUrl.slice(TINYURL_HOST.length)
  return shortPath2LongUrl.has(shortPath)
    ? shortPath2LongUrl.get(shortPath)
    : shortUrl
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
