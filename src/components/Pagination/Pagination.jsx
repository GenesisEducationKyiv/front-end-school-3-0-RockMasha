import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./Pagination.styled";
import { useEffect, useState } from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <PaginationContainer data-testid="pagination">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel={isPhone ? null : "..."}
        pageCount={totalPages}
        marginPagesDisplayed={isPhone ? 0 : 2}
        pageRangeDisplayed={isPhone ? 3 : 3}
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
  );
}

export default Pagination;
