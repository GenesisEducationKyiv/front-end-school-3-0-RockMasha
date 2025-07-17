import type { ChildrenProps } from '@/types'
import IconSVG from '../IconSVG/IconSVG'
import {
  FieldInput,
  FieldSelect,
  Label,
  SelectLabel,
  SelectSVGWrapper,
} from './FormikField.styled'
import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

interface BaseProps extends ChildrenProps {
  name: string
  signature?: string
  placeholder?: string
  type?: 'input' | 'select'
  bgcolor?: string
}
type NativeInputProps = InputHTMLAttributes<HTMLInputElement>
type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>
type InputProps = BaseProps & NativeInputProps & NativeSelectProps

function FormikField({
  name,
  signature,
  type = 'input',
  placeholder = '',
  children,
  bgcolor = 'transparent',
  ...props
}: InputProps) {
  return (
    <>
      {type === 'input' && (
        <Label>
          {signature}
          <FieldInput name={name} placeholder={placeholder} {...props} />
        </Label>
      )}
      {type === 'select' && (
        <SelectLabel>
          {signature}
          <FieldSelect
            component="select"
            name={name}
            placeholder={placeholder}
            bgcolor={bgcolor}
            {...props}
          >
            {children}
          </FieldSelect>
          <SelectSVGWrapper>
            <IconSVG id="select-arrow" />
          </SelectSVGWrapper>
        </SelectLabel>
      )}
    </>
  )
}

export default FormikField
