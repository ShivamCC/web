import AnimatedAnchor from "@/components/AnimatedAnchor";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Feature } from "@/types";

const FeaturesStickyLayout = ({ }: { sticky?: boolean }) => {
  const features = getListPage("sections/features.md").frontmatter;

  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="container">
        <h1 className="has-gradient mb-2 text-center text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-tight">
          What We Offer
        </h1>

        <div className="mx-auto mb-3 h-[2px] w-14 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        <p className="mx-auto mb-6 max-w-3xl text-center text-[clamp(0.95rem,1.4vw,1.1rem)] text-white/70 leading-relaxed">
          Powerful solutions designed to help you grow, scale, and stand out in
          the digital world.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <section className="section pt-4 pb-24">
        <div className="container relative">
          {features?.map((item: Feature["frontmatter"], mindex: number) => {
            const { title, description, list, images, button } = item;

            return (
              <div key={mindex} className="mb-28">
                {/* MAIN CARD */}
                <div
                  className="
                    rounded-3xl
                    bg-gradient-to-b from-primary/80 to-primary
                    border border-white/10
                    backdrop-blur-xl
                    shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
                  "
                >
                  <div className="row items-start">
                    {/* ================= LEFT ================= */}
                    <div className="lg:col-5">
                      <div className="px-6 pt-6 pb-10 md:px-10 lg:px-14">
                        {title && (
                          <h2
                            className="has-gradient mb-4 text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight"
                            dangerouslySetInnerHTML={markdownify(title)}
                          />
                        )}

                        {description && (
                          <div
                            className="text-[clamp(0.95rem,1.3vw,1.05rem)] leading-relaxed text-white/75"
                            dangerouslySetInnerHTML={markdownify(
                              description,
                              true
                            )}
                          />
                        )}

                        {button?.enable && (
                          <AnimatedAnchor
                            label={button.label}
                            link={button.link}
                            className="btn-primary mt-6"
                          />
                        )}
                      </div>
                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="lg:col-7">
                      <div className="px-6 pt-6 pb-10 md:px-10 flex flex-col gap-8 w-full">

                        {/* ===== IMAGES (HOVER POPUP) ===== */}
                        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6">
                          {images?.map((img, index) => (
                            <div
                              key={index}
                              className="group w-full transition-all duration-300"
                            >
                              <div
                                className="
                                  relative
                                  w-full
                                  aspect-[16/10]
                                  overflow-visible
                                  transition-all
                                  duration-300
                                  ease-out
                                  group-hover:scale-[1.06]
                                  group-hover:z-10
                                  group-hover:drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                                "
                              >
                                <ImageFallback
                                  src={img}
                                  alt={title}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* ===== LIST ===== */}
                        {list && (
                          <ul className="flex flex-wrap gap-4">
                            {list.map((item, i) => (
                              <li
                                key={i}
                                className="
                                  group
                                  inline-flex items-center gap-3
                                  rounded-full
                                  bg-white/[0.06]
                                  px-5 py-2.5
                                  border border-white/10
                                  backdrop-blur-sm
                                  shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]
                                  transition-all duration-300
                                  hover:-translate-y-0.5
                                  hover:bg-white/[0.1]
                                  hover:border-white/20
                                "
                              >
                                <span
                                  className="
                                    flex h-6 w-6 shrink-0 items-center justify-center
                                    rounded-full
                                    bg-yellow-400/20
                                    text-yellow-300
                                  "
                                >
                                  <DynamicIcon
                                    icon="FaCheck"
                                    className="text-[11px]"
                                  />
                                </span>

                                <span
                                  className="
                                    text-[clamp(0.9rem,1.1vw,1rem)]
                                    font-medium
                                    text-white/90
                                  "
                                  dangerouslySetInnerHTML={markdownify(item)}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturesStickyLayout;
