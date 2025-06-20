import { defineConfig } from '@playwright/experimental-ct-react'
import viteConfig from './vite.config'

export default defineConfig({
  testDir: './src/tests',
  testMatch: /.*\.spec\.(ts|tsx)$/,
  snapshotDir: './__snapshots__',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 10000,
  expect: {
    timeout: 10000,
  },
  use: {
    ctPort: 3100,
    ctViteConfig: viteConfig,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000/',
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
})
