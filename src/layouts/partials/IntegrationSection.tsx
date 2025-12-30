import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

type IntegrationSectionProps = {
  largeHeading?: boolean;
  hideBackground?: boolean;
  fluidContainer?: boolean;
  hideHeadingOverlay?: boolean;
  hideCTAButton?: boolean;
};

const IntegrationSection = ({
  largeHeading,
  fluidContainer,
  hideCTAButton,
}: IntegrationSectionProps) => {
  const { title, description, button } = getListPage(
    "sections/integration.md",
  ).frontmatter;

  const list = getSinglePage("integration");

  const mid = Math.floor(list.length / 2);
  const firstList = [...list.slice(0, mid), ...list.slice(0, mid)];
  const secondList = [...list.slice(mid), ...list.slice(mid)];

  const Container = fluidContainer ? "container-fluid" : "container";

  return (
    <section className="section overflow-x-hidden mt-18">
      <div className={Container}>
        <div className="row">

          {/* ================= HEADER ================= */}
          <div className="col-12 text-center">
            <div className="relative px-5 md:px-10">
              {largeHeading ? (
                <h1
                  className="has-gradient mt-6 mb-6"
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
                  className="text-lg font-medium opacity-80"
                  dangerouslySetInnerHTML={markdownify(description)}
                />
              )}

              {!hideCTAButton && button?.enable && (
                <AnimatedAnchor
                  className="btn-primary mt-10"
                  link={button.link}
                  label={button.label}
                />
              )}
            </div>
          </div>

          {/* ================= MARQUEES ================= */}
          <div className="col-12 pt-20">

            {/* ================= ROW 1 ================= */}
            <div className="relative flex overflow-visible -translate-y-2 mb-28">
              {/* ⛔ marquee ignores hover */}
              <div className="marquee marquee-duration-60 flex shrink-0 items-center gap-16 hover:[animation-play-state:paused]">
                {firstList.map((item, i) => {
                  const label =
                    item.frontmatter.title ||
                    item.frontmatter.name ||
                    "Integration";

                  return (
                    /* ✅ only card receives hover */
                    <div
                      key={`first-${i}`}
                      className="group relative z-10 pointer-events-auto isolate"
                    >
                      {/* OUTER – no transform */}
                      <div className="h-40 w-40">
                        {/* INNER – hover transform only */}
                        <div
                          className="
                            h-full w-full
                            transition-transform duration-300
                            will-change-transform
                            transform-gpu
                            hover:scale-[1.6]
                            hover:-translate-y-8
                          "
                        >
                          <ImageFallback
                            src={item.frontmatter.image}
                            alt={label}
                            width={160}
                            height={160}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* POPUP DOWN */}
                      <div
                        className="
                          pointer-events-none
                          absolute left-1/2 top-full mt-3
                          -translate-x-1/2
                          whitespace-nowrap
                          rounded-lg
                          border border-border
                          bg-body px-5 py-2
                          text-base font-semibold
                          opacity-0 scale-95
                          transition-all duration-200
                          group-hover:opacity-100
                          group-hover:scale-105
                        "
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= ROW 2 ================= */}
            <div className="relative mt-24 flex overflow-visible -translate-y-4">
              {/* ⛔ marquee ignores hover */}
              <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center gap-16 pointer-events-none hover:[animation-play-state:paused]" style={{ animationDelay: "-30s" }}>
                {secondList.map((item, i) => {
                  const label =
                    item.frontmatter.title ||
                    item.frontmatter.name ||
                    "Integration";

                  return (
                    /* ✅ only card receives hover */
                    <div
                      key={`second-${i}`}
                      className=" group relative z-10 pointer-events-auto isolate"
                    >
                      {/* OUTER – no transform */}
                      <div className="h-36 w-36">
                        {/* INNER – hover transform only */}
                        <div
                          className="
                            h-full w-full
                            transition-transform duration-300
                            will-change-transform
                            transform-gpu
                            hover:scale-[1.6]
                            hover:-translate-y-8
                          "
                        >
                          <ImageFallback
                            src={item.frontmatter.image}
                            alt={label}
                            width={140}
                            height={140}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* POPUP UP */}
                      <div
                        className="
                          pointer-events-none
                          absolute left-1/2 bottom-full mb-3
                          -translate-x-1/2
                          whitespace-nowrap
                          rounded-lg
                          border border-border
                          bg-body px-5 py-2
                          text-base font-semibold
                          opacity-0 scale-95
                          transition-all duration-200
                          group-hover:opacity-100
                          group-hover:scale-105
                        "
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
