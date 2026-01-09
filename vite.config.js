// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});
