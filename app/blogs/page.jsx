import getMarkDownData from "@/utils/getMarkDownData";
import MainBlogArea from "@/components/MainBlogArea";

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/blogs/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const metadata = {
  title: "Blogs | RealStatic",
};

const page = () => {
  const blogs = getMarkDownData("data/blogs");
  const categories = blogs.map((blog) => blog.data.category);
  const uniqueCategories = [...new Set(categories)];
  return <MainBlogArea blogCategory={uniqueCategories} blogs={blogs} />;
};

export default page;
