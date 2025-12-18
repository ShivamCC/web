import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const ContactHero = () => {
  const { hero }: { hero: RegularPage["frontmatter"]["hero"] } =
    getListPage("contact/_index.md").frontmatter;
  return (
    <>
      {hero && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div
                className="mx-auto text-center lg:col-8 xl:col-6"
                data-aos="fade-up-sm"
              >
                {hero.title && (
                  <h1
                    className="has-gradient"
                    dangerouslySetInnerHTML={markdownify(hero.title)}
                  />
                )}
                {hero?.description && (
                  <p
                    className="mt-6 text-lg/[inherit] opacity-80"
                    dangerouslySetInnerHTML={markdownify(hero.description)}
                  />
                )}
              </div>
              <div className="col-12 relative pt-20">
                <div className="row g-4 justify-center">
                  {hero.list?.map(
                    (
                      {
                        icon,
                        title,
                        description,
                        button,
                      }: {
                        icon: string;
                        title: string;
                        description: string;
                        button: {
                          label: string;
                          link: string;
                          enable: boolean;
                        };
                      },
                      index: number,
                    ) => (
                      <div
                        key={index}
                        className="md:col-6 lg:col-4"
                        data-aos="fade-up-sm"
                        data-aos-delay={index * 100}
                      >
                        <div className="group relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9">
                          {icon && (
                            <div className="mb-12 flex h-14 w-14 overflow-hidden items-center justify-start rounded-lg bg-gradient-to-b from-white/10 to-slate-800/25">
                              <div className="h-14 w-14 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-start">
                                <div className="min-w-14 flex justify-center items-center min-h-14">
                                  <ImageFallback
                                    className="h-7 w-7 object-cover"
                                    src={icon}
                                    alt={`icon related to ${title}`}
                                    width={28}
                                    height={28}
                                  />
                                </div>
                                <div
                                  className="min-w-14 flex justify-center items-center min-h-14"
                                  aria-hidden="true"
                                >
                                  <ImageFallback
                                    src={icon}
                                    className="h-7 w-7 object-cover"
                                    alt={`icon related to ${title}`}
                                    width={28}
                                    height={28}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          {title && (
                            <h3
                              className="h5 tracking-none mb-4"
                              dangerouslySetInnerHTML={markdownify(title)}
                            />
                          )}
                          {description && (
                            <p
                              className="opacity-80"
                              dangerouslySetInnerHTML={markdownify(description)}
                            />
                          )}

                          {button && button.enable && (
                            <AnimatedAnchor
                              label={button.label}
                              link={button.link}
                              className="btn-inline mt-6"
                            />
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div
                  aria-hidden="true"
                  className="rotate-animation pointer-events-none absolute -right-10 top-0 -z-10 h-60 w-[550px] -translate-x-2/4 rounded-full from-secondary via-secondary/80 via-60% to-dark/0 opacity-30 blur-[120px] bg-gradient-to-l"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactHero;
