import React from "react";

import { useFiltersContext } from "../../Context/filtersCtx";
import './index.css';

const Paginated = ({ total }) => {
  const { filters, setFilters } = useFiltersContext();
  const { page } = filters;
  const handlePrevius = () => {
    if (page > 0) {
      setFilters({ ...filters, page: page - 1 });
    }
  };

  const handleNext = () => {
    if (page < total) {
      setFilters({ ...filters, page: page + 1 });
    }
  };

  return (
    <div className="paginated-wrapper">
      <div className="paginated-container">
        <button onClick={handlePrevius} disabled={page === 0}>
          Previous
        </button>
        <span>{page + 1}</span>
        <button onClick={handleNext} disabled={page === total - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginated;