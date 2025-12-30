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
    ({ title, description, button } = features);
  }

  return (
    <section className="section pt-16 pb-4">
      {/* 🔥 wider container on desktop */}
      <div className="container max-w-[1400px]">
        <div className="row">

          {/* ================= HEADER ================= */}
          <div
            className="mx-auto mb-10 text-center lg:col-7"
            data-aos="fade-up-sm"
          >
            {title && (
              <h2
                className="
                  has-gradient mb-4 font-semibold
                  text-[clamp(2rem,3.2vw,2.8rem)]
                  leading-tight
                "
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
 <div className="mx-auto mb-6 h-[2px] w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />
            {description && (
              <p
                className="
                  mx-auto max-w-2xl
                  text-[clamp(1.05rem,1.4vw,1.2rem)]
                  leading-relaxed
                  opacity-80
                "
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* ================= CARDS ================= */}
          <div className="col-12">
            <div className="row gx-4 gy-4">
              {list?.map((item, index: number) => (
                <div
                  key={index}
                  className="
                    col-12
                    sm:col-6
                    lg:col-4
                  "
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 60}
                >
                  <div
                    className="
                      group relative h-full
                      rounded-2xl
                      border border-border
                      bg-body
                      p-6
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    {/* ================= ICON ================= */}
                    {item.icon && (
                      <div
                        className="
                          mb-4 flex h-11 w-11
                          items-center justify-center
                          rounded-lg
                          bg-gradient-to-b from-primary/20 to-secondary/20
                        "
                      >
                        <ImageFallback
                          src={item.icon}
                          alt=""
                          width={22}
                          height={22}
                          className="h-5 w-5"
                        />
                      </div>
                    )}

                    {/* ================= TITLE ================= */}
                    {item.title && (
                      <h3
                        className="
                          mb-2 font-semibold text-white
                          text-[clamp(1.2rem,1.6vw,1.45rem)]
                          leading-[1.35]
                          tracking-[0.01em]
                        "
                      >
                        {item.title}
                      </h3>
                    )}

                    {/* ================= DESCRIPTION ================= */}
                    {item.description && (
                      <p
                        className="
                          text-[clamp(1.05rem,1.2vw,1.15rem)]
                          leading-relaxed
                          opacity-75
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
                        h-[150px] w-[260px]
                        rotate-[-20deg]
                        bg-gradient-to-l from-body/0 to-primary
                        opacity-0 blur-[80px]
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
        <div className="mt-12 flex justify-center" data-aos="fade-up-sm">
          <a
            href={button.link}
            className="
              btn-primary rounded-xl
              px-9 py-3.5
              font-semibold
              text-[clamp(1rem,1.3vw,1.1rem)]
            "
          >
            {button.label}
          </a>
        </div>
      )}
    </section>
  );
};

export default FeaturesCardLayout;
