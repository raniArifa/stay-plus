"use client";
import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import { AnimatePresence } from "framer-motion";
import { propertiesData } from "@/data/data";

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
            <PropertyCard key={property.id} {...property} />
          ))}
        {category &&
          propertiesData
            .filter((item) => item.category.includes(category))
            .slice(0, limit)
            .map((property) => (
              <AnimatePresence key={property.id}>
                <PropertyCard key={property.id} {...property} />
              </AnimatePresence>
            ))}
      </div>
      {showPagination && <Pagination paginateFunction={paginateFunction} />}
    </>
  );
};

export default PropertyPagination;
