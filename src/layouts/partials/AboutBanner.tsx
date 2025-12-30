import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const frontmatter =
    getListPage("sections/about-banner.md").frontmatter;

  const { title, description } = frontmatter;

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
          <div className="col-12">

            <div className="grid gap-20 lg:grid-cols-2 items-start">

              {/* ================= LEFT : STORY ================= */}
              <div>

                {title && (
                  <h1
                    className="
                      mb-6 font-semibold tracking-tight
                      text-[clamp(2.6rem,4.4vw,3.6rem)]
                    "
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                )}

                {description && (
                  <div
                    className="text-lg leading-relaxed text-white/70"
                    dangerouslySetInnerHTML={markdownify(description, true)}
                  />
                )}

              </div>

              {/* ================= RIGHT : IMAGES ================= */}
              {images.length > 0 && (
                <div className="w-full">

                  {/* INVISIBLE TITLE SPACER (KEY FIX) */}
                  {title && (
                    <h1
                      className="
                        invisible
                        mb-6
                        text-[clamp(2.6rem,4.4vw,3.6rem)]
                      "
                    >
                      spacer
                    </h1>
                  )}

                  {/* IMAGE STACK */}
                  <div className="grid gap-16">

                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="
                          group relative w-full
                          rounded-[4px]
                          overflow-hidden
                          border border-white/10
                          shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)]
                          hover:-translate-y-4
                          transition-transform duration-700
                        "
                      >
                        <ImageFallback
                          src={img}
                          alt={`office image ${index + 1}`}
                          width={1000}
                          height={420}
                          className="
                            h-[420px] w-full object-cover
                            transition-transform duration-1000
                            group-hover:scale-110
                          "
                        />

                        {/* OVERLAY */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/85 via-black/35 to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-700
                          "
                        />

                        {/* TEXT */}
                        <div
                          className="
                            absolute bottom-0 p-8
                            translate-y-10 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-700
                          "
                        >
                          <p className="text-sm text-white/90">
                            {imageDescriptions[index] ||
                              "Engineered with spatial depth, precision, and calm confidence."}
                          </p>
                        </div>

                      </div>
                    ))}

                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
