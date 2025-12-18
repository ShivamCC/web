import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const IntegrationCardLayout = () => {
  const { title, description } = getListPage(
    "sections/integration.md",
  ).frontmatter;

  const list = getSinglePage("integration");

  return (
    <section className="section !overflow-visible">
      <div className="container">
        <div className="row">
          {/* HEADER */}
          <div className="mx-auto text-center lg:col-6">
            {title && (
              <h2
                className="has-gradient"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="mt-6 text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* CARDS */}
          <div className="col-12 pt-20 relative">
            <div className="row g-4 justify-center">
              {list?.map(({ frontmatter, slug }, index) => (
                <div
                  key={slug}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  {/* CARD */}
                  <div
                    className="
                      group relative min-h-full
                      overflow-visible
                      rounded-lg border border-white/5 bg-dark
                      p-9 transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
                    "
                  >
                    <div className="relative z-20">
                      {/* ICON + TITLE */}
                      <div className="mb-6 flex items-center gap-4">
                        {frontmatter.image && (
                          <div className="transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2">
  <ImageFallback
    src={frontmatter.image}
    width={70}
    height={70}
    className="h-[70px] w-[70px] object-contain"
  />
</div>

                        )}

                        <div>
                          {frontmatter.title && (
                            <h3
                              className="mb-1 text-xl font-semibold"
                              dangerouslySetInnerHTML={markdownify(
                                frontmatter.title,
                              )}
                            />
                          )}

                          {frontmatter.type && (
                            <p
                              className="opacity-70"
                              dangerouslySetInnerHTML={markdownify(
                                frontmatter.type,
                              )}
                            />
                          )}
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      {frontmatter.description && (
                        <p
                          className="opacity-80"
                          dangerouslySetInnerHTML={markdownify(
                            frontmatter.description,
                          )}
                        />
                      )}

                      {/* CTA */}
                      <AnimatedAnchor
                        className="btn-inline mt-8"
                        label="View Integration"
                        link={`/integration/${slug}/`}
                      />
                    </div>

                    {/* GLOW */}
                    <div
                      aria-hidden
                      className="
                        pointer-events-none absolute
                        bottom-[-22%] right-[-40%]
                        h-[180px] w-[335px]
                        rotate-[-20deg]
                        bg-gradient-to-l from-dark/0 to-secondary
                        opacity-0 blur-[83px]
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* BACKGROUND BLUR */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute
                -right-10 top-0 -z-10
                h-80 w-[550px]
                -translate-x-2/4
                rounded-full
                bg-gradient-to-l
                from-secondary via-secondary/80 to-dark/0
                opacity-30 blur-[120px]
                rotate-animation
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCardLayout;
