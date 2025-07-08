import { defineConfig } from '@playwright/experimental-ct-react'
import ctViteConfig from './vite-ct.config'

export default defineConfig({
  testDir: './src/tests/',
  testMatch: /.*\.ct\.(ts|tsx)$/,
  snapshotDir: './src/tests/__snapshots__',
  timeout: 60 * 1000,
  reporter: 'html',
  expect: {
    timeout: 10000,
  },
  use: {
    ctViteConfig: ctViteConfig,
    ctPort: 3200,
  },
})
