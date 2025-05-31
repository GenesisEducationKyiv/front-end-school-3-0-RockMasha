function getPaginationValues(isPhone) {
  const marginPagesDisplayed = isPhone ? 0 : 2;
  const breakLabel = isPhone ? null : "...";
  const pageRangeDisplayed = isPhone ? 3 : 3;

  return {
    marginPagesDisplayed,
    breakLabel,
    pageRangeDisplayed,
  };
}

export default getPaginationValues;
