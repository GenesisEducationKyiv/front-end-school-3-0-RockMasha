import type { Id, Slug } from '@/types'
import DeleteSvg from '../../../../assets/svg/DeleteSvg'
import RedactSvg from '../../../../assets/svg/RedactSvg'
import useCardBtn from '../hooks/useCardBtn'
import {
  ActionButton,
  ActionButtonHidden,
  ActionButtonsList,
  ActionButtonUpload,
  ActionItem,
  ActionItemHidden,
} from './CardBtns.styled'
import ArrowSvg from '@/assets/svg/ArrowSvg'

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
          data-testid={'upload-track-' + id}
          onClick={openUploadModal}
        >
          <ArrowSvg />
        </ActionButtonUpload>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={'edit-track-' + id}
          onClick={openRedactModal}
        >
          <RedactSvg />
        </ActionButton>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={'delete-track-' + id}
          onClick={openDeleteModal}
        >
          <DeleteSvg />
        </ActionButton>
      </ActionItem>
    </ActionButtonsList>
  )
}

export default CardBtns
