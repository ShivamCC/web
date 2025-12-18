import BlogCard from "@/components/BlogCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import { Post, RegularPage } from "@/types";

const BlogSection = ({
  content,
  largeHeading,
  posts,
}: {
  content?: Post["frontmatter"];
  largeHeading?: boolean;
  posts?: Post[];
}) => {
  // Get default blog data from the "sections" content collection
  let blogIndex: RegularPage = getListPage("blog/_index.md");
  let { title, description } = blogIndex.frontmatter;

  // Override default blog data (Title, Subtitle & Description) with props if provided
  if (content) {
    ({ title, description } = content);
  }

  // Constant for blog folder path
  const BLOG_FOLDER = "blog";

  // Get all blog posts from the specified folder if no posts are passed as props
  posts = posts ? posts : getSinglePage(BLOG_FOLDER);

  // Fetch all blog posts from the specified folder
  const featuredPost = posts.find((post) => post.frontmatter.featured === true);
  const featuredExcludePosts = posts.filter(
    (post) => post.frontmatter.featured !== true,
  );

  // Sort blog posts by date in descending order
  let sortedPosts = sortByDate(featuredExcludePosts);

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="mx-auto text-center lg:col-8 xl:col-6"
            data-aos="fade-up-sm"
          >
            {title && largeHeading ? (
              <h1
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            ) : (
              <h2
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="mx-auto pt-20 md:col-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5 justify-center md:gx-5">
              {featuredPost && (
                <div className="col-12">
                  <BlogCard featuredCardLayout content={featuredPost} />
                </div>
              )}
              {sortedPosts.map(
                (blog, i: number) =>
                  blog && (
                    <div className="col-12" key={i}>
                      <BlogCard content={blog} />
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
