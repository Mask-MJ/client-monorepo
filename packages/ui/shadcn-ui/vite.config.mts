import { defineConfig } from '@mask/vite-config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(async () => {
  return {
    vite: {
      plugins: [tailwindcss()],
    },
  };
});
