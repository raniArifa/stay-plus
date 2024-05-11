"use client";
import PropertyPagination from "./PropertyPagination";

const MainPropertyArea = ({ propertiesData, errorMessage, loading }) => {
  return (
    <section className="filter">
      <div className="container">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {loading && (
          <div className="text-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="listing">
          <PropertyPagination
            limit={6}
            showPaginationﬂ
            property={propertiesData}
          />
        </div>
      </div>
    </section>
  );
};

export default MainPropertyArea;
