import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction2 from "@/partials/CallToAction2";
import SeoMeta from "@/partials/SeoMeta";
import { Changelog, RegularPage } from "@/types";

const ChangelogPage = () => {
  const featureIndex: RegularPage["frontmatter"] =
    getListPage("feature/_index.md").frontmatter;

  const { title, description, list }: Changelog["frontmatter"] = getListPage(
    "sections/changelog.md",
  ).frontmatter;

  return (
    <>
      <SeoMeta {...featureIndex} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div
              className="xl:col-6 mx-auto text-center lg:col-9"
              data-aos="fade-up-sm"
            >
              {title && (
                <h1
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
              className="col-12 mx-auto pt-20 space-y-6"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              {list && list.length > 0 ? (
                list?.map((item, i: number) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border px-7 md:px-14 py-8 md:py-16 backdrop-blur-2xl"
                  >
                    <div className="row gy-4 justify-between">
                      <div className="col-auto">
                        {item.date && (
                          <p
                            className="text-lg opacity-70"
                            dangerouslySetInnerHTML={markdownify(item.date)}
                          />
                        )}
                      </div>
                      {item.content && (
                        <div className="lg:col-7">
                          <span
                            className="mb-6 inline-block rounded-full border border-black bg-gradient-to-r from-primary to-slate-800 px-5 py-1.5"
                            dangerouslySetInnerHTML={markdownify(item.version)}
                          />

                          {item.title && (
                            <h2
                              className="h5 tracking-none mb-4 font-bold"
                              dangerouslySetInnerHTML={markdownify(item.title)}
                            />
                          )}
                          <div
                            className="content prose-p:text-lg/[inherit]"
                            dangerouslySetInnerHTML={markdownify(
                              item.content,
                              true,
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No changelog entries found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <CallToAction2 />
    </>
  );
};

export default ChangelogPage;
