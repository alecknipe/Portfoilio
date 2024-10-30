import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: './', // Ensures assets are loaded relative to the root
  plugins: [react()],
});
