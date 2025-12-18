import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { markdownify, plainify } from "@/lib/utils/textConverter";
import AnimatedAnchor from "./AnimatedAnchor";
import { Post } from "@/types";

const BlogCard = ({
  featuredCardLayout,
  content,
}: {
  featuredCardLayout?: boolean;
  content: Post;
}) => {
  const { summary_length, blog_folder } = config.settings;
  const { title, image, date } = content.frontmatter;

  return (
    <>
      {featuredCardLayout ? (
        <div className="rounded-lg border border-border bg-dark px-8 py-7 lg:px-16 lg:py-14">
          <div>
            {date && <span className="opacity-70">{dateFormat(date)}</span>}
            {title && (
              <h3 className="h3 has-gradient tracking-none mb-4 mt-2 font-bold">
                <a
                  className="hover:text-primary"
                  href={`/${blog_folder}/${content.slug}/`}
                  dangerouslySetInnerHTML={markdownify(title)}
                ></a>
              </h3>
            )}
          </div>
          <div>
            <ImageFallback
              className="mt-10 w-full rounded-2xl"
              src={image}
              alt={title}
              width={1200}
              height={500}
            />
            <div>
              {content && (
                <div className="mt-10">
                  <p className="text-lg opacity-80">
                    {plainify(
                      (content.content ?? "").slice(0, Number(summary_length)),
                    )}
                  </p>
                </div>
              )}
              {content.slug && (
                <div className="mt-10">
                  <AnimatedAnchor
                    label={"Continue Reading"}
                    className="btn-primary"
                    link={`/${blog_folder}/${content.slug}/`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10 rounded-lg border border-border bg-dark px-8 py-7 md:flex-row lg:px-16 lg:py-14">
          <ImageFallback
            className="w-full rounded-xl md:w-[200px]"
            src={image}
            alt={title}
            width={200}
            height={200}
          />
          <div>
            {date && <span className="opacity-70">{dateFormat(date)}</span>}
            {title && (
              <h3 className="h5 tracking-none mb-4 mt-2 font-bold">
                <a
                  className="transition duration-300 hover:opacity-80"
                  href={`/${blog_folder}/${content.slug}/`}
                >
                  {plainify(title)}
                </a>
              </h3>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
