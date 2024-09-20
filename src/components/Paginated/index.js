import React from "react";
import "./index.css";

const Paginated = ({page, setPage, total}) => {
    const handleNext = () => {
        if (page < total) {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div className="paginated-wrapper">
          <div className="paginated-container">
            <button onClick={handlePrevious} disabled={page === 0}>
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