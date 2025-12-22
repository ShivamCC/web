import AnimatedAnchor from "@/components/AnimatedAnchor";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Feature } from "@/types";

const FeaturesStickyLayout = ({ sticky = true }: { sticky?: boolean }) => {
  const features = getListPage("sections/features.md").frontmatter;

  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="container">
        <h1
          className="has-gradient mb-3 text-center text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          What We Offer
        </h1>

        {/* DIVIDER */}
        <div className="mx-auto mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        <p className="mx-auto mb-6 max-w-3xl text-center text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
          Powerful solutions designed to help you grow, scale, and stand out in
          the digital world.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <section className="section pt-6 pb-20 lg:pt-10 lg:pb-28">
        <div className="container relative">
          {features?.map((item: Feature["frontmatter"], mindex: number) => {
            const { title, description, list, images, button } = item;
            const isLast = mindex === features.length - 1;

            return (
              <div key={mindex} className="relative">
                {/* ================= CARD ================= */}
                <div
                  className={`relative overflow-hidden rounded-3xl
                  bg-gradient-to-b from-primary/80 to-primary
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
                  ${
                    !sticky
                      ? "mb-32"
                      : `max-lg:mb-36 lg:sticky ${
                          mindex === 1 ? "lg:top-[160px]" : "lg:top-[120px]"
                        }`
                  }`}
                >
                  <div className="row">
                    {/* ================= LEFT ================= */}
                    <div className="lg:col-5">
                      <div className="min-h-full py-10 px-6 md:py-14 md:px-12 lg:py-28 lg:px-20">
                        {title && (
                          <h2
                            className="has-gradient mb-5 text-4xl md:text-5xl font-semibold leading-tight"
                            dangerouslySetInnerHTML={markdownify(title)}
                          />
                        )}

                        {description && (
                          <div
                            className="text-lg md:text-xl leading-relaxed text-white/75"
                            dangerouslySetInnerHTML={markdownify(
                              description,
                              true,
                            )}
                          />
                        )}

                        {list && (
                          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-12">
                            {list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 rounded-xl
                                bg-white/5 px-4 py-3
                                border border-white/10"
                              >
                                <DynamicIcon
                                  icon="FaCheck"
                                  className="text-yellow-300 mt-1 text-sm"
                                />
                                <span
                                  className="text-base md:text-lg font-medium text-white/90"
                                  dangerouslySetInnerHTML={markdownify(item)}
                                />
                              </li>
                            ))}
                          </ul>
                        )}

                        {button && button.enable && (
                          <AnimatedAnchor
                            label={button.label}
                            link={button.link}
                            className="btn-primary mt-8 md:mt-10"
                          />
                        )}
                      </div>
                    </div>

                    {/* ================= RIGHT (WIDER IMAGE AREA) ================= */}
                    <div className="lg:col-7">
                      <div className="rounded-3xl bg-body lg:pl-6">
                        <div className="flex min-h-full items-center px-6 md:px-12">
                          <div className="relative w-full py-14 lg:py-24">
                            {images?.map((img, index: number) => {
                              const getClass = (m: number, i: number) => {
                                switch (m) {
                                  case 0:
                                    return i === 0
                                      ? "w-[95%] mx-auto"
                                      : "w-[70%] mx-auto mt-10";

                                  case 1:
                                    return i === 0
                                      ? "w-[90%] mx-auto"
                                      : "w-[75%] mx-auto mt-16%";

                                  case 2:
                                    return i === 0
                                      ? "w-[85%] mx-auto"
                                      : "w-[65%] mx-auto mt-20";

                                  default:
                                    return "w-[90%] mx-auto";
                                }
                              };

                              return (
                                <ImageFallback
                                  key={index}
                                  src={img}
                                  alt={title}
                                  width={800}
                                  height={600}
                                  className={`relative z-10 rounded-2xl
                                    shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
                                    transition-transform duration-500
                                    hover:scale-[1.03]
                                    ${getClass(mindex, index)}
                                  `}
                                />
                              );
                            })}

                            {/* GLOW */}
                            <div
                              aria-hidden
                              className="pointer-events-none absolute bottom-0 left-1/2 z-0
                              h-[420px] w-[620px]
                              -translate-x-1/2 rotate-[-18deg]
                              rounded-full bg-gradient-to-tr
                              from-secondary/40 via-secondary via-60% to-primary
                              opacity-70 blur-[240px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= CONNECTOR ================= */}
                {!isLast && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 connector-wrap">
                    <span className="connector-line" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CONNECTOR CSS ================= */}
      <style>{`
        .connector-wrap {
          height: 140px;
          width: 2px;
          pointer-events: none;
          view-timeline-name: --connector;
          view-timeline-axis: block;
        }

        .connector-line {
          position: absolute;
          inset: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.9),
            rgba(255,255,255,0.15)
          );
          transform-origin: top;
          transform: scaleY(0);
          opacity: 0;
          animation: connect-line linear both;
          animation-timeline: --connector;
          animation-range: entry 10% cover 80%;
        }

        @keyframes connect-line {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default FeaturesStickyLayout;
