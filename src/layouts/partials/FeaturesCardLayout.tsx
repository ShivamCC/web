import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureCardLayout } from "@/types";

const FeaturesCardLayout = ({
  features,
}: {
  features?: FeatureCardLayout["frontmatter"];
}) => {
  let { title, description, list, button }: FeatureCardLayout["frontmatter"] =
    getListPage("sections/features-card-layout.md").frontmatter;

  // Override title & description if features is passed in
  if (features) {
    ({ title, description } = features);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
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
          <div className="col-12 pt-20">
            <div className="row g-4 justify-center">
              {list?.map((item, index: number) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="group relative min-h-full overflow-hidden rounded-lg border border-border bg-body p-9">
                    {item.icon && (
                     <div className="mb-12 flex h-14 w-14 overflow-hidden items-center justify-start 
            rounded-lg bg-gradient-to-b from-primary/20 to-secondary/20">

                        <div className="h-14 w-14 transition duration-500 ease-out group-hover:-translate-y-full flex flex-col items-start">
                          <div className="min-w-14 flex justify-center items-center min-h-14">
                            <ImageFallback
                              className="h-7 w-7 object-cover"
                              src={item.icon}
                              alt={`icon related to ${item.title}`}
                              width={28}
                              height={28}
                            />
                          </div>
                          <div
                            className="min-w-14 flex justify-center items-center min-h-14"
                            aria-hidden="true"
                          >
                            <ImageFallback
                              src={item.icon}
                              className="h-7 w-7 object-cover"
                              alt={`icon related to ${item.title}`}
                              width={28}
                              height={28}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {item.title && (
                      <h3
                        className="tracking-none mb-4 text-xl/snug"
                        dangerouslySetInnerHTML={markdownify(item.title)}
                      />
                    )}
                    {item.description && (
                      <p
                        className="opacity-60"
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}

                    <div className="pointer-events-none absolute bottom-[-22%] right-[-40%] 
    h-[180px] w-[335px] rotate-[-20deg] bg-gradient-to-l 
    from-body/0 to-primary opacity-0 blur-[83px] 
    transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {button?.enable && (
  <div className="mt-14 flex justify-center" data-aos="fade-up-sm">
    <a
      href={button.link}
      className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl"
    >
      {button.label}
    </a>
  </div>
)}

    </section>
  );
};

export default FeaturesCardLayout;
