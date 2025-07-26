import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    storybookTest({
      configDir: path.resolve(__dirname, '.storybook'),
    }),
  ],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: '.storybook/vitest.setup.ts',
  },
  optimizeDeps: {
    include: [
      'markdown-to-jsx',
      'react/jsx-dev-runtime',
      'styled-components',
    ],
  },
})

