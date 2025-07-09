import type { Id, Slug } from '@/types'
import useCardBtn from '../hooks/useCardBtn'
import {
  ActionButton,
  ActionButtonHidden,
  ActionButtonsList,
  ActionButtonUpload,
  ActionItem,
  ActionItemHidden,
} from './CardBtns.styled'
import IconSVG from '@/components/UI/IconSVG/IconSVG'

interface Props {
  slug: Slug
  id: Id
}

function CardBtns({ slug, id }: Props) {
  const { openDeleteModal, openRedactModal, openUploadModal } = useCardBtn({
    slug,
    id,
  })

  return (
    <ActionButtonsList>
      <ActionItemHidden>
        <ActionButtonHidden />
      </ActionItemHidden>
      <ActionItem>
        <ActionButtonUpload
          data-testid={`upload-track-${id}`}
          onClick={openUploadModal}
        >
          <IconSVG id="arrow" />
        </ActionButtonUpload>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={`edit-track-${id}`}
          onClick={openRedactModal}
        >
          <IconSVG id="redact" />
        </ActionButton>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={`delete-track-${id}`}
          onClick={openDeleteModal}
        >
          <IconSVG id="delete" />
        </ActionButton>
      </ActionItem>
    </ActionButtonsList>
  )
}

export default CardBtns
