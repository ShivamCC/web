import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type FeaturesGrid as FeaturesGridType } from "@/types";

const FeaturesGrid = ({ largeHeading }: { largeHeading?: boolean }) => {
  const { title, description, list }: FeaturesGridType["frontmatter"] =
    getListPage("sections/features-grid.md").frontmatter;

  return (
    <>
      {/* ===== INLINE CSS (SERVER SAFE) ===== */}
      <style>{`
        @keyframes fadeSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-slide-down {
          animation: fadeSlideDown 0.6s ease-out forwards;
        }
      `}</style>

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
              <div className="row gx-4 gy-4 items-stretch">
                {list?.map((item, index) => (
                  <div
                    key={index}
                    className="lg:col-4"
                    data-aos="fade-up-sm"
                    data-aos-delay={index * 120}
                  >
                    {/* CARD */}
                    <div className="flex h-full flex-col rounded-lg border border-border bg-dark p-5">
                      
                      {/* ===== TITLE + DESC ===== */}
                      <div className="[&_p]:m-0">
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

                      {/* ===== IMAGES ===== */}
                      <div className="mt-12">
                        {/* ---------- CARD 1 : POS ---------- */}
                        {index === 0 && item.images && (
                          <div className="relative overflow-hidden">
                            <div className="marquee flex h-[52px] w-max items-center gap-8 whitespace-nowrap">
                              {[...item.images, ...item.images].map((img, i) => (
                                <ImageFallback
                                  key={i}
                                  src={img}
                                  alt="pos"
                                  width={140}
                                  height={60}
                                  className="h-[34px] w-auto object-contain opacity-90"
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ---------- CARD 2 : ZOMATO / SWIGGY ---------- */}
                        {index === 1 && item.images && (
                          <div className="flex items-center justify-center gap-8">
                            {item.images.map((img, i) => (
                              <div
                                key={i}
                                className="fade-slide-down flex h-[84px] w-[166px] items-center justify-center"
                                style={{
                                  animationDelay: `${i * 150}ms`,
                                }}
                              >
                                <ImageFallback
                                  src={img}
                                  alt="platform"
                                  width={166}
                                  height={84}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* ---------- CARD 3 : TOOLS ---------- */}
                        {index === 2 && (
                          <div className="relative mx-auto w-full max-w-[260px]">
                            {item.tools_bg && (
                              <ImageFallback
                                src={item.tools_bg}
                                alt="tools bg"
                                width={260}
                                height={260}
                                className="w-full"
                              />
                            )}

                            {item.tools &&
                              item.tools.map((tool, i) => {
                                const pos = [
                                  "left-0 top-5",
                                  "left-[30%] top-5",
                                  "right-[18%] top-2",
                                  "left-[20%] top-[36%]",
                                  "left-[44%] top-[36%]",
                                  "left-[72%] top-[42%]",
                                  "left-[20%] top-[72%]",
                                  "left-[54%] top-[66%]",
                                ];

                                return (
                                  <div
                                    key={i}
                                    className={`absolute z-10 ${pos[i] || ""}`}
                                  >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 shadow-lg">
                                      <div className="h-7 w-7 overflow-hidden rounded-full bg-black">
                                        <ImageFallback
                                          src={tool}
                                          alt="tool"
                                          width={28}
                                          height={28}
                                          className="h-full w-full object-contain"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;
