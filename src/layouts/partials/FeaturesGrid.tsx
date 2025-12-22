import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type FeaturesGrid } from "@/types";

const FeaturesGrid = ({ largeHeading }: { largeHeading?: boolean }) => {
  const { title, description, list }: FeaturesGrid["frontmatter"] = getListPage(
    "sections/features-grid.md",
  ).frontmatter;

  return (
    <section className="section pb-12 md:pb-16">
      <div className="container">
        <div className="row">
          {/* ================= HEADER ================= */}
          <div
            className="mx-auto text-center lg:col-9 xl:col-7"
            data-aos="fade-up-sm"
          >
            {title &&
              (largeHeading ? (
                <h1
                  className="has-gradient mb-4"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ) : (
                <h2
                  className="has-gradient mb-4"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              ))}

            {description && (
              <p
                className="text-lg opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* ================= CARDS ================= */}
          <div className="col-12 pt-10 md:pt-12">
            <div className="row gx-4 gy-4">
              {list?.map((item, index) => (
                <div
                  key={index}
                  className="lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 120}
                >
                  <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-dark p-5">
                    {/* ================= TITLE + DESC ================= */}
                   <div className="[&_p]:m-0 mb-4">

                      {item.title && (
                        <h3
                          className="mb-2 text-[15px] md:text-[16px] font-medium leading-snug tracking-tight text-white"
                          dangerouslySetInnerHTML={markdownify(item.title)}
                        />
                      )}
                      {item.description && (
                        <p
                          className="text-sm leading-relaxed opacity-70"
                          dangerouslySetInnerHTML={markdownify(
                            item.description,
                          )}
                        />
                      )}
                    </div>

                    {/* ================= CARD 1 : POS MARQUEE ================= */}
                    {index === 0 && item.images && (
                      <div className="relative overflow-hidden pt-2">
                        <div
                          className="
                            marquee
                            flex
                            h-[72px]
                            w-max
                            flex-nowrap
                            items-center
                            gap-10
                            whitespace-nowrap
                          "
                        >
                          {[...item.images, ...item.images].map((img, i) => (
                            <ImageFallback
                              key={i}
                              src={img}
                              alt="pos"
                              width={140}
                              height={60}
                              className="
                                shrink-0
                                h-[44px]
                                w-auto
                                object-contain
                                opacity-90
                                
                              "
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ================= CARD 2 : ZOMATO / SWIGGY MARQUEE ================= */}
                    {index === 1 && item.images && (
                      <div className="relative overflow-hidden pt-2">
                        <div
                          className="
                            flex
                            h-[72px]
                            w-full
                            items-center
                            justify-center
                            gap-12
                            whitespace-nowrap
                          "
                        >
                         {item.images.map((img, i) => (
                            <ImageFallback
                              key={i}
                              src={img}
                              alt="platform"
                              width={160}
                              height={60}
                              className="
                                shrink-0
                                h-[40px]
                                w-auto
                                object-contain
                                scale-125
                                transition-transform
                                duration-300
                              "
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ================= CARD 3 : TOOLS ================= */}
                    {index === 2 && (
                      <div className="relative mx-auto mt-1 w-full max-w-[340px]">
                        {item.tools_bg && (
                          <ImageFallback
                            src={item.tools_bg}
                            alt="tools bg"
                            width={340}
                            height={340}
                            className="w-full"
                          />
                        )}

                        {item.tools &&
                          item.tools.map((tool, i) => {
                            const pos = [
                              "left-0 top-6",
                              "left-[30%] top-6",
                              "right-[18%] top-3 opacity-70",
                              "left-[20%] top-[38%]",
                              "left-[44%] top-[38%] opacity-50",
                              "left-[72%] top-[44%]",
                              "left-[20%] top-[74%]",
                              "left-[54%] top-[68%]",
                            ];

                            return (
                              <div
                                key={i}
                                className={`absolute z-10 ${
                                  pos[i] || ""
                                } w-[32px]`}
                              >
                                <ImageFallback
                                  src={tool}
                                  alt="tool"
                                  width={32}
                                  height={32}
                                />
                              </div>
                            );
                          })}
                      </div>
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
