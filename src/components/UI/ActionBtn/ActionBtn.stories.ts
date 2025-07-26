import type { Meta, StoryObj } from '@storybook/react-vite'
import ActionBtn from './ActionBtn'
import { ICON_LIST } from '@/shared/consts/ICON_LIST'

const meta: Meta<typeof ActionBtn> = {
  component: ActionBtn,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select', 
      options: ICON_LIST,
    },
  },
}

type Store = StoryObj<typeof ActionBtn>

export const Primary: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Primary',
    icon: 'redact',
  },
}

export const PrimarySub: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Primary-sub',
    icon: 'redact',
  },
}

export const Secondary: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Secondary',
    icon: 'redact',
  },
}


export const SecondarySub: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Secondary-sub',
    icon: 'redact',
  },
}


export const Tertiary: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Tertiary',
    icon: 'redact',
  },
}

export const TertiarySub: Store = {
  args: {
    minSize: 25,
    maxSize: 45,
    theme: 'Tertiary-sub',
    icon: 'redact',
  },
}

export default meta
