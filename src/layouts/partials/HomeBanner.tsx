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
              <div className="mx-auto mb-4 w-fit rounded-full border border-white/15 px-3 py-1.5">
                <span
                  className="text-sm opacity-70 md:text-base"
                  dangerouslySetInnerHTML={markdownify(note)}
                />
              </div>
            )}

            {/* ===== TEXT FLASH (RIGHT → LEFT) ===== */}
            {title && (
              <h1
                className="mb-4 text-h2 lg:text-h1 title-text-flash-rtl"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}

            {description && (
              <p
                className="mb-8 text-xl/[inherit] text-light"
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
                    <li key={index}>
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
            <div className="col-12 pt-8 lg:pt-16">
              <div className="mx-auto max-w-[900px]">
                <ImageFallback
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  className="mx-auto rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= TEXT FLASH CSS ================= */}
      <style>{`
        .title-text-flash-rtl {
          font-weight: 600;
          background: linear-gradient(
            110deg,
            #9ca3af 0%,
            #ffffff 40%,
            #9ca3af 55%,
            #9ca3af 100%
          );
          background-size: 220% auto;
          background-position: 0% center; /* start RIGHT */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textFlashRTL 5s ease-in-out infinite;
        }

        /* RIGHT → LEFT */
        @keyframes textFlashRTL {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
