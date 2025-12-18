import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type FeaturesGrid } from "@/types";

const FeaturesGrid = ({ largeHeading }: { largeHeading?: boolean }) => {
  const { title, description, list }: FeaturesGrid["frontmatter"] = getListPage(
    "sections/features-grid.md",
  ).frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className="mx-auto text-center lg:col-9 xl:col-7"
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
          <div className="col-12 pt-20">
            <div className="row gx-4 gy-5">
              {list?.map((item, index: number) => (
                <div
                  key={index}
                  className="lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 150}
                >
                  <div
                    className={`flex min-h-full justify-between overflow-hidden rounded-lg border border-border bg-dark ${index === 0 ? "flex-col-reverse p-8" : index === 1 ? "pt-8 px-8 flex-col" : index === 2 ? "flex-col pl-8 pt-8" : "flex-col p-8"}`}
                  >
                    <div className={(index === 2 && "pe-8") || ""}>
                      {item.title && (
                        <h3
                          className="h6 tracking-none mb-4 font-semibold"
                          dangerouslySetInnerHTML={markdownify(item.title)}
                        />
                      )}
                      {item.description && (
                        <p
                          className="mb-auto opacity-70"
                          dangerouslySetInnerHTML={markdownify(
                            item.description,
                          )}
                        />
                      )}
                    </div>

                    {index === 0 && item.images ? (
                      <div className="mb-20 lg:mb-36 flex items-center justify-center gap-10">
                        {item.images.map((item, i) => (
                          <ImageFallback
                            key={i}
                            className={`${i === 1 ? "w-28 md:w-44" : "w-20 md:w-32"}`}
                            src={item}
                            alt={`user image`}
                            width={i === 1 ? 176 : 128}
                            height={i === 1 ? 176 : 128}
                          />
                        ))}
                      </div>
                    ) : index === 1 && item.images ? (
                      <div className="relative lg:-mb-8 w-full max-w-[420px] mt-40 mx-auto">
                        {item.images.slice(0, 2).map((item, i) => (
                          <ImageFallback
                            key={i}
                            className={`absolute inset-x-0 mx-auto block ${i === 0 ? "bottom-[10%] z-0 w-[80%]" : index === 1 ? "bottom-[-5%] z-10 w-[90%]" : "w-full"}`}
                            src={item}
                            alt={`feature`}
                            width={i === 0 ? 320 : 400}
                            height={i === 0 ? 320 : 400}
                          />
                        ))}
                        <ImageFallback
                          className={`relative z-30 w-full`}
                          src={item.images[2]}
                          alt={`user image`}
                          width={400}
                          height={400}
                        />
                      </div>
                    ) : (
                      index === 2 && (
                        <div className="relative w-full max-w-[420px] mt-10 mx-auto">
                          {item.tools_bg && (
                            <ImageFallback
                              className={`relative z-0 w-full pl-4`}
                              src={item.tools_bg}
                              alt={`user image`}
                              width={400}
                              height={400}
                            />
                          )}
                          {item.tools &&
                            item.tools.map((item, i: number) => {
                              const classes = [
                                "left-0 top-7 w-[calc(1vw_+_35px)]",
                                "left-[33%] top-7 w-[calc(1vw_+_35px)]",
                                "right-[20%] top-3 opacity-70 w-[calc(1vw_+_40px)]",
                                "left-[22%] top-[40%] w-[calc(1vw_+_35px)]",
                                "left-[46%] top-[40%] w-[calc(1vw_+_35px)] opacity-50",
                                "left-[76%] top-[46%] w-[calc(1vw_+_35px)]",
                                "left-[22%] top-[78%] w-[calc(1vw_+_35px)]",
                                "left-[56%] top-[70%] w-[calc(1vw_+_35px)]",
                              ];

                              return (
                                <div
                                  key={i}
                                  className={`absolute z-10 ${classes[i] || ""}`}
                                >
                                  <ImageFallback
                                    className={`w-full h-full`}
                                    src={item}
                                    alt={`user image`}
                                    width={64}
                                    height={64}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
