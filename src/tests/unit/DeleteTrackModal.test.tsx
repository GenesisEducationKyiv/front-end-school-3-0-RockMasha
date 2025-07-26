import { describe, expect, vi, afterEach, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DeleteTrackModal } from '@/features/modals/DeleteTrackModal'

const mockDeleteItem = vi.fn()
const mockRefuseDeleteItem = vi.fn()

vi.mock('@/components/UI/IconSVG/IconSVG', () => ({
  default: () => <svg data-testid="letter-svg" />,
}))

vi.mock('@/components/UI/Modal/Modal', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="modal">{children}</div>
  ),
}))

vi.mock('@/features/modals/DeleteTrackModal/hooks/useDeleteTrackModal', () => ({
  default: vi.fn(() => ({
    deleteItem: mockDeleteItem,
    refuseDeleteItem: mockRefuseDeleteItem,
  })),
}))

describe('DeleteTrackModal', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('renders DeleteTrackModal with correct structure', () => {
    render(<DeleteTrackModal />)
    expect(screen.getByTestId('modal')).toBeInTheDocument()
    expect(screen.getByText('Delete this Track?')).toBeInTheDocument()
    expect(screen.getByTestId('letter-svg')).toBeInTheDocument()
    expect(screen.getByTestId('confirm-dialog')).toBeInTheDocument()
    expect(screen.getByTestId('cancel-delete')).toHaveTextContent('No')
    expect(screen.getByTestId('confirm-delete')).toHaveTextContent('Yes')
  })

  test('has correct color attribute for No button', () => {
    render(<DeleteTrackModal />)
    const noButton = screen.getByTestId('cancel-delete')
    expect(noButton).toHaveAttribute('color', 'no')
  })

  test('has correct color attribute for Yes button', () => {
    render(<DeleteTrackModal />)
    const yesButton = screen.getByTestId('confirm-delete')
    expect(yesButton).toHaveAttribute('color', 'yes')
  })

  test('calls refuseDeleteItem when No button is clicked', async () => {
    render(<DeleteTrackModal />)
    const user = userEvent.setup()
    const noButton = screen.getByTestId('cancel-delete')
    await user.click(noButton)
    expect(mockRefuseDeleteItem).toHaveBeenCalledTimes(1)
    expect(mockDeleteItem).not.toHaveBeenCalled()
  })

  test('calls deleteItem when Yes button is clicked', async () => {
    render(<DeleteTrackModal />)
    const user = userEvent.setup()
    const yesButton = screen.getByTestId('confirm-delete')
    await user.click(yesButton)
    expect(mockDeleteItem).toHaveBeenCalledTimes(1)
    expect(mockRefuseDeleteItem).not.toHaveBeenCalled()
  })
})
