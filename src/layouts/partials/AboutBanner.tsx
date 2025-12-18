import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const frontmatter =
    getListPage("sections/about-banner.md").frontmatter;

  const { title, description } = frontmatter;

  // 🔒 SAFE image array
  const images: string[] = Array.isArray(frontmatter.images)
    ? frontmatter.images
    : frontmatter.images
    ? [frontmatter.images]
    : [];

  const imageDescriptions: string[] =
    frontmatter.image_descriptions || [];

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          {/* ================= TEXT ================= */}
          {/* ❌ AOS REMOVED FROM TITLE (NO FLASH) */}
          <div className="lg:col-6">
            {title && (
              <h1
                className="
                  mb-6 font-semibold tracking-tight
                  text-[clamp(2.6rem,4.4vw,3.6rem)]
                "
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
          </div>

          {/* DESCRIPTION (animation OK) */}
          <div
            className="
              lg:col-6 lg:pl-20
              text-lg leading-relaxed text-white/70
            "
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {description && (
              <div
                dangerouslySetInnerHTML={markdownify(description, true)}
              />
            )}
          </div>

          {/* ================= IMAGE PANELS ================= */}
          {images.length > 0 && (
            <div className="col-12 pt-36 grid gap-14 md:grid-cols-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 220}
                  data-aos-duration="1600"
                  className="
                    group relative
                    rounded-[36px]
                    overflow-hidden
                    bg-white/[0.035]
                    backdrop-blur-[32px]
                    border border-white/10
                    shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]
                    transition-all duration-[1600ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    hover:-translate-y-5
                    animate-[float_14s_ease-in-out_infinite]
                  "
                >
                  {/* IMAGE */}
                  <ImageFallback
                    src={img}
                    alt={`about image ${index + 1}`}
                    width={460}
                    height={360}
                    className="
                      h-[360px] w-full object-cover
                      scale-[1.1]
                      transition-transform duration-[2000ms]
                      ease-[cubic-bezier(.16,1,.3,1)]
                      group-hover:scale-[1.26]
                    "
                  />

                  {/* TOP LIGHT */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-[radial-gradient(150%_70%_at_50%_0%,rgba(255,255,255,0.24),transparent_60%)]
                      opacity-0 transition-opacity duration-[1600ms]
                      group-hover:opacity-100
                    "
                  />

                  {/* DEPTH FOG */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t
                      from-black/95 via-black/45 to-transparent
                      opacity-0 transition-opacity duration-[1600ms]
                      group-hover:opacity-100
                    "
                  />

                  {/* RIM LIGHT */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-[36px]
                      ring-1 ring-inset ring-white/10
                      opacity-0 transition-opacity duration-[1600ms]
                      group-hover:opacity-100
                    "
                  />

                  {/* GLASS SWEEP */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-br
                      from-white/20 via-white/5 to-transparent
                      opacity-0 transition-opacity duration-[1600ms]
                      group-hover:opacity-100
                    "
                  />

                  {/* FILM GRAIN */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      opacity-[0.035]
                      bg-[url('/images/noise.png')]
                      mix-blend-overlay
                    "
                  />

                  {/* TEXT ON HOVER */}
                  <div
                    className="
                      absolute inset-x-0 bottom-0 p-9
                      translate-y-12 opacity-0
                      transition-all duration-[1600ms]
                      ease-[cubic-bezier(.16,1,.3,1)]
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <p className="text-sm leading-relaxed text-white/90">
                      {imageDescriptions[index] ||
                        "Engineered with spatial depth, precision, and calm confidence."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FLOAT KEYFRAME */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutBanner;
