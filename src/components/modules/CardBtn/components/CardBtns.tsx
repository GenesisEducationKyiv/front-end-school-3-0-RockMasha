import type { Id, Slug } from '@/types'
import useCardBtn from '../hooks/useCardBtn'
import {
  ActionButtonsList,
  ActionItem,
  ActionItemHidden,
} from './CardBtns.styled'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'

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
      <ActionItemHidden />
      <ActionItem>
        <ActionBtn
          icon="upload"
          theme="Secondary-sub"
          minSize={23}
          maxSize={46}
          handleClick={openUploadModal}
          data-testid={`upload-track-${id}`}
        />
      </ActionItem>
      <ActionItem onClick={openRedactModal}>
        <ActionBtn
          icon="redact"
          theme="Secondary-sub"
          minSize={23}
          maxSize={46}
          handleClick={openRedactModal}
          data-testid={`edit-track-${id}`}
        />
      </ActionItem>
      <ActionItem>
        <ActionBtn
          icon="delete"
          theme="Secondary-sub"
          minSize={23}
          maxSize={46}
          handleClick={openDeleteModal}
          data-testid={`delete-track-${id}`}
        />
      </ActionItem>
    </ActionButtonsList>
  )
}

export default CardBtns
