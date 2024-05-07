"use client";
import PropertyPagination from "./PropertyPagination";

const MainPropertyArea = ({ propertiesData }) => {
  return (
    <section className="filter">
      <div className="container">
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
