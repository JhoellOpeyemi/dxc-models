import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { Blog } from "@/sanity/types";

import BlogCard from "@/components/BlogCard/BlogCard";

import "./blogs.css";

const Blogs = async () => {
  const blogs = await client.fetch<Blog[]>(BLOGS_QUERY);

  return (
    <section className="blogs-section-container">
      <p className="blogs-count">All ({blogs.length})</p>

      <div className="blogs-container">
        {blogs.map((blog) => (
          <article key={blog?._id}>
            <BlogCard blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
