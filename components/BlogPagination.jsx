"use client";
import React, { useState } from "react";
import BlogArticle from "./BlogArticle";
import Pagination from "./Pagination";

const BlogPagination = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(blogs.length / itemsPerPage);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
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
    <div className="blog-page">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 g-4">
          {currentPageData.map((blog) => (
            <BlogArticle key={blog.slug} {...blog} />
          ))}
        </div>
        <Pagination paginateFunction={paginateFunction} />
      </div>
    </div>
  );
};

export default BlogPagination;
