import type { ChildrenProps } from '@/types'
import { Container, Section } from './TracksSection.styled'

function TracksSection({ children }: ChildrenProps) {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  )
}

export default TracksSection
