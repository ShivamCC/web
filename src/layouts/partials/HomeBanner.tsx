import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, note, description, buttons, list, image } = getListPage(
    "sections/home-banner.md",
  ).frontmatter;

  return (
    <section className="relative overflow-hidden pb-0 pt-20 home-banner">
      {/* 🌫️ NOISE */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-noise opacity-40"
      />

      {/* 🌈 BASE GRADIENT */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/20
        "
      />

      <div className="container">
        <div className="row justify-center">
          {/* ================= TEXT ================= */}
          <div className="pt-6 text-center md:col-9 lg:col-9">
            {note && (
              <div
                data-aos="fade-up-sm"
                className="border-animation mx-auto mb-4 w-fit rounded-full p-px"
              >
                <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5 backdrop-blur-md">
                  <ImageFallback
                    width={24}
                    height={24}
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

            {/* 🔥 TITLE — NO AOS, NO FLASH */}
            {title && (
              <h1
                suppressHydrationWarning
                className="
                  hero-title
                  mb-4 text-h2 lg:text-h1 font-semibold tracking-tight
                  bg-gradient-to-r from-white via-primary to-white
                  bg-clip-text text-transparent
                "
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}

            {description && (
              <p
                data-aos="fade-up-sm"
                className="mb-10 text-xl/[inherit] text-light opacity-90"
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
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <AnimatedAnchor
                        className={
                          index === 0
                            ? "btn-primary"
                            : "btn-outline-transparent"
                        }
                        link={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener"
                        label={label}
                        hideIcon={index !== 0}
                      />
                    </li>
                  ),
                )}
              </ul>
            )}

            {list && (
              <ul
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="mt-6 flex flex-wrap justify-center gap-4"
              >
                {list.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-sm opacity-70"
                  >
                    {index !== 0 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    )}
                    <span dangerouslySetInnerHTML={markdownify(item)} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ================= IMAGE ================= */}
          {image && (
            <div
              className="col-12 pt-12 lg:pt-24"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              <div className="max-h-[825px]">
                <div className="group relative mx-auto max-w-[900px] perspective-[1200px]">
                  <span
                    aria-hidden
                    className="
                      absolute -inset-12 -z-10
                      rounded-full
                      bg-gradient-to-tr from-primary/30 via-secondary/30 to-primary/30
                      blur-[140px]
                    "
                  />

                  <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

                  <div
                    className="
                      relative
                      animate-float-slow
                      transition-all duration-700 ease-out
                      will-change-transform
                      group-hover:-translate-y-10
                      group-hover:scale-[1.05]
                      group-hover:rotate-x-6
                      group-hover:-rotate-y-6
                      group-hover:shadow-[0_90px_160px_-50px_rgba(0,0,0,0.85)]
                    "
                  >
                    <ImageFallback
                      src={image.src}
                      alt={image.alt}
                      width={700}
                      height={600}
                      className="mx-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔒 HARD KILL FLASH */}
      <style>{`
        .home-banner [data-aos] {
          opacity: 1 !important;
          transform: none !important;
        }

        .hero-title {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
        }

        /* shimmer AFTER load only */
        @media (prefers-reduced-motion: no-preference) {
          .hero-title {
            animation: shimmer 6s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
