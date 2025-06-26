import type { ImageMetadata } from "astro";

export function getHeroImages(heroImage: string) {
  const heroImagePath = `/src/images/heroes/${heroImage}`;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/heroes/*.{jpeg,jpg,png,gif}",
  );

  return images[heroImagePath]?.();
}
