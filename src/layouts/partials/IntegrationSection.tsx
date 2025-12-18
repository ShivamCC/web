import AnimatedAnchor from "@/components/AnimatedAnchor";
import IntegrationCard from "@/components/IntegrationCard";
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
  hideBackground,
  fluidContainer,
  hideHeadingOverlay,
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
    <section className="section !overflow-visible">
      <div className={Container}>
        <div
          className={
            !hideBackground
              ? "overflow-visible rounded-xl border border-border bg-body pt-10 md:pt-20"
              : ""
          }
        >
          <div className="row">
            {/* HEADER */}
            <div className="col-12 text-center">
              <div className="relative px-5 md:px-10">
                {largeHeading ? (
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
                    className="text-lg font-medium opacity-80"
                    dangerouslySetInnerHTML={markdownify(description)}
                  />
                )}

                {!hideCTAButton && button?.enable && (
                  <AnimatedAnchor
                    className="btn-primary mt-11"
                    link={button.link}
                    label={button.label}
                  />
                )}

                {!hideHeadingOverlay && (
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute left-1/2 top-44
                      -z-10
                      h-80 w-[550px]
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-l
                      from-secondary
                      via-secondary/80
                      to-dark/0
                      opacity-60
                      blur-[120px]
                    "
                  />
                )}
              </div>
            </div>

            {/* MARQUEES */}
            <div className="col-12 pt-20">
              {/* ROW 1 */}
              <div className="marquee-wrapper flex gap-5 overflow-visible">
                <div className="marquee marquee-duration-60 flex shrink-0 items-center gap-5">
                  {firstList.map((item, i) => (
                    <IntegrationCard
                      key={`first-${i}`}
                      image={item.frontmatter.image}
                      style="h-40 w-40 object-contain"
                    />
                  ))}
                </div>

                <div
                  className="marquee marquee-duration-60 flex shrink-0 items-center gap-5"
                  aria-hidden
                >
                  {firstList.map((item, i) => (
                    <IntegrationCard
                      key={`first-dup-${i}`}
                      image={item.frontmatter.image}
                      style="h-40 w-40 object-contain"
                    />
                  ))}
                </div>
              </div>

              {/* ROW 2 */}
              <div className="marquee-wrapper mt-4 flex gap-5 overflow-visible">
                <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center gap-5">
                  {secondList.map((item, i) => (
                    <IntegrationCard
                      key={`second-${i}`}
                      image={item.frontmatter.image}
                      style="h-36 w-36 object-contain"
                    />
                  ))}
                </div>

                <div
                  className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center gap-5"
                  aria-hidden
                >
                  {secondList.map((item, i) => (
                    <IntegrationCard
                      key={`second-dup-${i}`}
                      image={item.frontmatter.image}
                      style="h-36 w-36 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
