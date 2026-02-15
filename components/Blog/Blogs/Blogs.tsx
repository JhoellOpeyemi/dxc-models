"use client";

import { useBlogs } from "@/sanity/lib/hooks";

import BlogCard from "@/components/Blog/Blogs/BlogCard/BlogCard";
import { Loading } from "@/components/Loading/Loading";

import "./blogs.css";
import { Error } from "@/components/Errors/Error";

const Blogs = () => {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) return <Loading label="Blogs" />;
  if (error) return <Error label="Blogs" />;

  return (
    <section className="blogs-section-container">
      <p className="blogs-count">All ({blogs?.length})</p>

      <div className="blogs-container">
        {blogs?.map((blog) => (
          <article key={blog?._id}>
            <BlogCard blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
