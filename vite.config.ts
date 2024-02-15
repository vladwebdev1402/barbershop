import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/src/shared/scss/_variables.scss";',
      },
    },
  },
});
