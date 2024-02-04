import getMarkDownData from "@/utils/getMarkDownData";
import Link from "next/link";
import NewsLetter from "./NewsLetter";
import HomeBlog from "./HomeBlog";
import { Arrow } from "@/data/svgImages";

const BlogArea = () => {
  const blogs = getMarkDownData("data/blogs");

  function getUniqueTitles(array) {
    const uniqueTitles = [];
    for (let i = 0; i < array.length; i++) {
      const title = array[i].data.title;

      const isExistTtitle = uniqueTitles.find(
        (blog) => blog.data.title === title
      );

      if (!isExistTtitle) {
        uniqueTitles.push(array[i]);
      }
    }
    return uniqueTitles;
  }

  const uniqueBlog = getUniqueTitles(blogs);

  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between blog-header">
              <h3>News &amp; Consultant</h3>
              <Link
                href="/blogs"
                className="d-md-flex align-items-center d-none "
              >
                <span>Explore All </span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <HomeBlog blogs={uniqueBlog} />
        <div className="row">
          <div className="col-6">
            <Link
              href="/blogs"
              className="btn btn-small btn-outline btn-mobile d-md-none align-items-center d-flex w-auto"
            >
              <span>Explore All </span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
    </section>
  );
};

export default BlogArea;
