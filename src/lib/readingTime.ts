/**
 * @see https://daily-dev-tips.com/posts/adding-reading-time-to-astro-the-easy-way/
 */

const WORDS_PER_MINUTE = 250;

export function getReadingTime(content: string) {
  const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
  const numberOfWords = clean.split(/\s/g).length;
  return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
