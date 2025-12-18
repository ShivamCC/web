import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import dateFormat from "@/lib/utils/dateFormat";
import { plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

const BlogSingle = ({ post }: { post: Post }) => {
  const { date, title, image } = post.frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-9" data-aos="fade-up-sm">
            {date && <span className="opacity-70">{dateFormat(date)}</span>}
            {title && (
              <h1 className="has-gradient md:h1 h2 tracking-none mb-4 mt-2 font-bold">
                {plainify(title)}
              </h1>
            )}
          </div>
          <div
            className="col-12 pt-10 md:pt-16"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            {image && (
              <div className="mb-16">
                <ImageFallback
                  src={image}
                  height={500}
                  width={1200}
                  alt={title}
                  className="h-auto w-full rounded-xl object-cover md:h-[700px]"
                  format="webp"
                />
              </div>
            )}
          </div>
          <article className="lg:col-8" data-aos="fade-up-sm">
            <div className="content">
              <MDXContent content={post.content} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
