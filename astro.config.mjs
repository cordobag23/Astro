// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import svgSprite from 'astro-svg-sprite';

// https://astro.build/config
export default defineConfig({
  integrations: [svgSprite()],
  output: 'server',  // Habilita SSR
  adapter: node({ mode: 'standalone' }),   // Usa el adaptador de Node.js
});