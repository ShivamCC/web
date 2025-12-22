import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, note, description, buttons, image } = getListPage(
    "sections/home-banner.md",
  ).frontmatter;

  return (
    <section className="relative overflow-hidden pb-0 pt-16">
      <div className="container">
        <div className="row justify-center">
          {/* ================= TEXT ================= */}
          <div className="pt-6 text-center md:col-9 lg:col-9">
            {note && (
              <div
                data-aos="fade-up-sm"
                className="border-animation mx-auto mb-4 w-fit rounded-full p-px"
              >
                <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                  <ImageFallback
                    width={30}
                    height={28}
                    src="/images/icons/svg/award.svg"
                    alt="note"
                  />
                  <span
                    className="text-sm opacity-70 md:text-base"
                    dangerouslySetInnerHTML={markdownify(note)}
                  />
                </div>
              </div>
            )}

            {title && (
              <h1
                className="has-gradient mb-4 text-h2 lg:text-h1"
                data-aos="fade-up-sm"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}

            {description && (
              <p
                className="mb-8 text-xl/[inherit] text-light"
                data-aos="fade-up-sm"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}

            {buttons && (
              <ul className="flex flex-wrap justify-center gap-4">
                {buttons.map(
                  (
                    { label, link }: { label: string; link: string },
                    index: number,
                  ) => (
                    <li key={index} data-aos="fade-up-sm">
                      <AnimatedAnchor
                        className={
                          index === 0
                            ? "btn-primary"
                            : "btn-outline-transparent"
                        }
                        link={link}
                        label={label}
                        hideIcon={index !== 0}
                      />
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>

          {/* ================= DIRECTIONAL TILT IMAGE ================= */}
          {image && (
            <div
              className="col-12 pt-8 lg:pt-16"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mx-auto max-w-[900px] perspective-1000">
                <div className="tilt-wrapper">
                  {/* invisible hover zones */}
                  <span className="tilt-zone top" />
                  <span className="tilt-zone bottom" />
                  <span className="tilt-zone left" />
                  <span className="tilt-zone right" />

                  {/* actual image */}
                  <div className="tilt-card floating-card rounded-2xl">
                    <ImageFallback
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={700}
                      className="mx-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= BACKGROUND GLOW ================= */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[15%] top-1/2 z-10
                   h-[358px] w-[516px] rotate-[-19deg] rounded-full
                   bg-gradient-to-tr from-secondary/40 via-secondary to-primary
                   opacity-30 blur-[100px]"
      />
      

    </section>
  );
};

export default HomeBanner;
