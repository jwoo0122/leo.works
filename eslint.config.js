import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";

export default tseslint.config(
  {
    ignores: ["dist/", ".astro/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
);
