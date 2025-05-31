import { useEffect, useState } from "react";

function usePagination(setCurrentPage) {
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

  return { isPhone, handlePageClick };
}

export default usePagination;
