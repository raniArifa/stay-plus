"use client";
import {CaretDown, MagnifyingGlass} from "phosphor-react";
const PropertyFilter = ({propertyFilterFunctionality}) => {
  const {
    search,
    handleSearch,
    handleReset,
  } = propertyFilterFunctionality;
  return (
    <div className="container">
      <div className="row">
        <div className="filter-title">
          <h3>Find Property</h3>
        </div>
        <div className="filter-content">
          <div className="filter-content-properties d-flex align-items-center">
            <div className="input-group filter-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter State Address"
                value={search}
                onChange={handleSearch}
              />
              <span className="input-group-text">
                <MagnifyingGlass
                  size={20}
                  weight="bold"
                />
              </span>
            </div>
            <button
              onClick={handleReset}
              className="btn btn-large close-filter-content"
            >
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
