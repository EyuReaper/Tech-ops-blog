// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
    integrations: [
        // Tailwind integration - use the Astro Tailwind integration
    tailwind(),
    // Use default Vue integration behavior (no Astro page entrypoint)
    vue(),
    ],
    output: 'static',
    site: 'https://Tech-ops-blog.vercel.app',
});
