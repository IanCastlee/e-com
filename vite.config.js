import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasFramerMotion = fs.existsSync(
  path.resolve(__dirname, 'node_modules/framer-motion/package.json')
);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: hasFramerMotion
      ? {}
      : {
          'framer-motion': path.resolve(__dirname, 'src/utils/framerMotionShim.jsx'),
        },
  },
  server: {
    port: 5173,
    open: false,
  },
});
