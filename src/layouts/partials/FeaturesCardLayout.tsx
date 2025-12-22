import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureCardLayout } from "@/types";

const FeaturesCardLayout = ({
  features,
}: {
  features?: FeatureCardLayout["frontmatter"];
}) => {
  let { title, description, list,button}: FeatureCardLayout["frontmatter"] =
    getListPage("sections/features-card-layout.md").frontmatter;

  if (features) {
    ({ title, description,button } = features);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {/* ================= HEADER ================= */}
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-sm opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* ================= CARDS ================= */}
          <div className="col-12 pt-10">
            <div className="row g-4 justify-center">
              {list?.map((item, index: number) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 80}
                >
                  <div
                    className="
                      group relative h-full
                      rounded-xl border border-border
                      bg-body p-6
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    {/* ================= ICON ================= */}
                    {item.icon && (
                      <div
                        className="
                          mb-4 flex h-10 w-10
                          items-center justify-center
                          rounded-md
                          bg-gradient-to-b from-primary/20 to-secondary/20
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      >
                        <ImageFallback
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                      </div>
                    )}

                    {/* ================= TITLE (DISTORTION FIXED) ================= */}
                    {item.title && (
                      <h3
                        className="
                          mb-2
                          text-sm
                          font-semibold
                          leading-[1.45]
                          tracking-normal
                          break-words
                          whitespace-normal
                          text-white
                        "
                      >
                        {item.title}
                      </h3>
                    )}

                    {/* ================= DESCRIPTION ================= */}
                    {item.description && (
                      <p
                        className="
                          text-xs
                          leading-relaxed
                          opacity-70
                        "
                        dangerouslySetInnerHTML={markdownify(
                          item.description,
                        )}
                      />
                    )}

                    {/* ================= HOVER GLOW ================= */}
                    <div
                      className="
                        pointer-events-none absolute -bottom-24 -right-32
                        h-[140px] w-[260px] rotate-[-20deg]
                        bg-gradient-to-l from-body/0 to-primary
                        opacity-0 blur-[70px]
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BUTTON ================= */}
      {button?.enable && (
        <div className="mt-10 flex justify-center" data-aos="fade-up-sm">
          <a
            href={button.link}
            className="btn-primary rounded-lg px-6 py-2.5 text-sm font-semibold"
          >
            {button.label}
          </a>
        </div>
      )}
    </section>
  );
};

export default FeaturesCardLayout;
