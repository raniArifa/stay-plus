"use client";
import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";

const PropertyPagination = ({
  showPagination,
  limit = 3,
  property,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = limit;
  const totalPage = Math.ceil(property?.length / itemsPerPage);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return property?.slice(startIndex, endIndex);
  };

  const currentPageData = paginateData();
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
  };

  return (
    <>
      <div className="grid row row-cols-xl-3 row-cols-md-2 g-4">
        {!category &&
          currentPageData?.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
      </div>
      {showPagination && <Pagination paginateFunction={paginateFunction} />}
    </>
  );
};

export default PropertyPagination;
