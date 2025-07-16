import type { Meta, StoryObj } from '@storybook/react-vite'
import FormikField from './FormikField'
import { Formik } from 'formik'

const meta: Meta<typeof FormikField> = {
  component: FormikField,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
        <Story />
      </Formik>
    ),
  ],
}

type Store = StoryObj<typeof FormikField>

export const Input: Store = {
  args: {
    name: 'name',
    signature: 'Name',
    type: 'input',
    placeholder: 'Write name',
  },
}

export const Select: Store = {
  args: {
    name: 'name',
    signature: 'Name',
    type: 'select',
    bgColor: "var(--color-surface)",
    children: (
      <>
        <option value="">anonymous</option>
        <option value="mariia">Mariia</option>
        <option value="oleh">Oleh</option>
      </>
    ),
  },
}

export default meta
