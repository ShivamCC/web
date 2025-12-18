import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction1 = () => {
  const { enable, title, description, button, image, bg_image } = getListPage(
    "sections/call-to-action-1.md",
  ).frontmatter;

  return (
    <>
      {enable && (
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-dark/60 p-7 !pb-0 md:p-10 lg:pl-16 lg:pr-0 lg:pt-16">
              <div className="row relative z-10 lg:gy-0">
                <div className="lg:col-5">
                  <div className="min-h-full pb-16">
                    <div>
                      <h2
                        dangerouslySetInnerHTML={markdownify(title)}
                        className="has-gradient mb-6"
                        data-aos="fade-up-sm"
                      />
                      <div data-aos="fade-up-sm" data-aos-delay="50">
                        <p
                          dangerouslySetInnerHTML={markdownify(description)}
                          className="text-lg/[inherit] opacity-50"
                        />
                      </div>
                    </div>
                    {/* {button.enable && (
                      <AnimatedAnchor
                        className="btn-primary mt-8 lg:mt-16 xl:mt-36"
                        link={button.link}
                        label={button.label}
                        data-aos="fade-up-sm"
                        data-aos-delay="100"
                      />
                    )} */}
                  </div>
                </div>
                {image && (
                  <div
                    className="lg:col-7"
                    data-aos="fade-right-sm"
                    data-aos-delay="150"
                  >
                    <ImageFallback
                      className="-mb-px h-[450px] w-full rounded-t-xl border border-border bg-body object-cover object-left-top lg:ml-28 lg:rounded-3xl lg:rounded-b-none"
                      src={image}
                      alt="sales report"
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </div>
              <div aria-hidden="true">
                <ImageFallback
                  className="absolute inset-0 z-0 h-full w-full object-contain object-left-bottom"
                  src={bg_image}
                  alt="background pattern image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction1;
