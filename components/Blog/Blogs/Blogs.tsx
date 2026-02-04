"use client";

import { useBlogs } from "@/sanity/lib/hooks";

import BlogCard from "@/components/Blog/Blogs/BlogCard/BlogCard";

import "./blogs.css";

const Blogs = () => {
  const { data: blogs, isLoading, error } = useBlogs();

  console.log(blogs);

  if (isLoading) return <p>Loading Blogs...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;

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
