import type { Preview } from '@storybook/react-vite'
import '@/styles/index.css'
import { create } from 'storybook/internal/theming'

const myDocsBackgroundTheme = create({
  base: 'dark', 
  appBg: '#171217', 
  appContentBg: '#171217', 
})

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#171217' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },

    docs: {
      theme: myDocsBackgroundTheme,
    },
  },
}

export default preview
