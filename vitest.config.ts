import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@velvet-tool/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@velvet-tool/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
