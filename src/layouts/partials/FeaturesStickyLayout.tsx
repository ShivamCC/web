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
      <section className="section py-28 lg:py-36">
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
                      ? "mb-40"
                      : `max-lg:mb-44 lg:sticky ${
                          mindex === 1 ? "lg:top-[160px]" : "lg:top-[120px]"
                        }`
                  }`}
                >
                  <div className="row">
                    {/* ================= LEFT ================= */}
                    <div className="lg:col-6">
                      <div className="min-h-full py-10 px-6 md:py-16 md:px-12 lg:py-36 lg:px-20">
                        {title && (
                          <h2
                            className="has-gradient mb-6 text-4xl md:text-5xl font-semibold leading-tight"
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
                          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-16">
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
                            className="btn-primary mt-8 md:mt-12"
                          />
                        )}
                      </div>
                    </div>

                    {/* ================= RIGHT (ORIGINAL IMAGES) ================= */}
                    <div className="lg:col-6">
                      <div className="rounded-3xl bg-body lg:pl-5">
                        <div className="flex min-h-full items-center px-5 md:px-10">
                          <div className="relative py-10 md:w-[60%] lg:w-auto lg:py-20">
                            {images?.map((img, index: number) => {
                              const getClass = (m: number, i: number) => {
                                switch (m) {
                                  case 0:
                                    return i === 0
                                      ? "w-full"
                                      : "w-[60%] mt-6";
                                  case 1:
                                    return i === 0
                                      ? "w-[76%]"
                                      : "w-[70%] ml-[24%] mt-[-12%]";
                                  case 2:
                                    return i === 0
                                      ? "w-[70%] mx-auto"
                                      : "w-[55%] ml-6 mt-[-20%]";
                                  default:
                                    return i === 0
                                      ? "w-[76%]"
                                      : "w-[70%] ml-[24%] mt-[-12%]";
                                }
                              };

                              return (
                                <ImageFallback
                                  key={index}
                                  src={img}
                                  alt={title}
                                  width={500}
                                  height={500}
                                  className={`relative z-10 ${getClass(
                                    mindex,
                                    index,
                                  )}`}
                                />
                              );
                            })}

                            {/* ORIGINAL GLOW */}
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute bottom-px left-2/4 z-0
                              h-[353px] w-[509px]
                              -translate-x-2/4 rotate-[-19deg]
                              rounded-full bg-gradient-to-tr
                              from-secondary/40 via-secondary via-60% to-primary
                              opacity-60 blur-[207px]"
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
          height: 160px;
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

        .connector-line::before,
        .connector-line::after {
          content: "";
          position: absolute;
          left: 50%;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 999px;
          transform: translateX(-50%) scale(0);
          opacity: 0;
          filter: blur(2px);
        }

        .connector-line::before {
          top: -4px;
        }

        .connector-line::after {
          bottom: -4px;
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

        @supports (animation-timeline: view()) {
          .connector-line::before,
          .connector-line::after {
            animation: glow-dot linear both;
            animation-timeline: --connector;
            animation-range: entry 30% cover 90%;
          }
        }

        @keyframes glow-dot {
          from {
            transform: translateX(-50%) scale(0);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) scale(1);
            opacity: 1;
            box-shadow: 0 0 24px rgba(255,255,255,0.9);
          }
        }
      `}</style>
    </>
  );
};

export default FeaturesStickyLayout;
