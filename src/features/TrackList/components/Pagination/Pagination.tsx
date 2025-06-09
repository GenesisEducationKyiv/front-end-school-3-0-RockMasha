import ReactPaginate from 'react-paginate'
import { PaginationContainer } from './Pagination.styled'
import usePagination from '../../hooks/usePagination'
import getPaginationValues from '../../helpers/getPaginationValues'
import type { SetState } from '@/types'

interface Props {
  totalPages: number
  currentPage: number
  setCurrentPage: SetState<number>
}

function Pagination({ totalPages, currentPage, setCurrentPage }: Props) {
  const { isPhone, handlePageClick } = usePagination(setCurrentPage)
  const { marginPagesDisplayed, breakLabel, pageRangeDisplayed } =
    getPaginationValues(isPhone)

  return (
    <PaginationContainer data-testid="pagination">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel={breakLabel}
        pageCount={totalPages}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item page-previous"
        previousLinkClassName="page-link"
        nextClassName="page-item page-next"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </PaginationContainer>
  )
}

export default Pagination
