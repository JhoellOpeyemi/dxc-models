import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Blog } from "@/sanity/types";

import markdownit from "markdown-it";

import StyledLink from "@/components/StyledLink/StyledLink";

import "./blogCard.css";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const md = markdownit();
  const parsedIntroduction = md.render(blog.introduction || "");

  return (
    <div className="blog-container">
      <div className="blog-text-container">
        <div className="blog-title-n-body-container">
          <h2 className="blog-title">{blog.title}</h2>

          {parsedIntroduction ? (
            <p
              dangerouslySetInnerHTML={{ __html: parsedIntroduction }}
              className="blog-intro"
            />
          ) : (
            <p className="blog-intro"></p>
          )}
        </div>

        <StyledLink path="/" label="Read More" />
      </div>

      <div className="blog-image-container">
        {blog.image && (
          <Image
            src={urlFor(blog.image).auto("format").url()}
            alt=""
            className="blog-image"
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
          />
        )}
      </div>

      <p className="blog-date-posted">{blog.date}</p>
    </div>
  );
};

export default BlogCard;
