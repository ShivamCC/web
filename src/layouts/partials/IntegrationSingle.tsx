import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { markdownify } from "@/lib/utils/textConverter";
import { Integration } from "@/types";

const IntegrationSingle = ({ integration }: { integration: Integration }) => {
  const { title, description, type, image, button } = integration.frontmatter;
  return (
    <section className="section pt-5">
      <div className="container">
        <div className="row gy-4 flex-col-reverse items-start justify-start lg:flex-row">
          {integration.content && (
            <div className="lg:col-8" data-aos="fade-up-sm">
              <div className="content relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9">
                <MDXContent content={integration.content} />
              </div>
            </div>
          )}
          <div className="lg:col-4" data-aos="fade-up-sm" data-aos-delay="50">
            <div className="relative min-h-full overflow-hidden rounded-lg border border-white/5 bg-dark p-9">
              <div className="mb-6 flex items-center gap-4">
                {image && (
                  <ImageFallback
                    className="h-[70px] w-[70px] object-cover"
                    src={image}
                    alt={`icon related to ${title}`}
                    width={70}
                    height={70}
                  />
                )}
                <div>
                  {title && (
                    <h3
                      className="tracking-none mb-1 text-xl/snug font-semibold"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  )}
                  {type && (
                    <p
                      className="tracking-none mt-0 opacity-70"
                      dangerouslySetInnerHTML={markdownify(type)}
                    />
                  )}
                </div>
              </div>
              {description && (
                <p
                  className="opacity-80"
                  dangerouslySetInnerHTML={markdownify(description)}
                />
              )}
              {button && button.enable && (
                <AnimatedAnchor
                  className="btn-inline mt-8"
                  link={button.link}
                  label={button.label}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSingle;
