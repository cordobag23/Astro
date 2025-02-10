// @ts-check
import { defineConfig } from 'astro/config';

import svgSprite from 'astro-svg-sprite';

// https://astro.build/config
export default defineConfig({
  integrations: [svgSprite()]
});