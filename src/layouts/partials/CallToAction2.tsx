import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction2 = () => {
  const { enable, title, bg_image, description, button, list } = getListPage(
    "sections/call-to-action-2.md",
  ).frontmatter;

  return (
    <>
      {enable && (
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-dark/60 py-40">
              {/* Background */}
              <ImageFallback
                className="absolute inset-0 z-0 h-full w-full"
                src={bg_image}
                alt="background pattern image"
                width={1920}
                height={1080}
              />

              {/* Floating ICONS */}
              <div className="pointer-events-none absolute inset-0 z-0">
                {/* Icon 01 */}
                {list?.[0]?.icon && (
                  <div className="absolute left-[9%] top-[12%]">
                    <div className="relative h-12 w-12 md:h-20 md:w-20 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[0].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <ImageFallback
                      src="/images/call-to-action/pattern-1.png"
                      className="max-md:w-40"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                  </div>
                )}

                {/* Icon 02 */}
                {list?.[1]?.icon && (
                  <div className="absolute -top-2 left-[38%] pl-2">
                    <div className="relative h-12 w-12 md:h-16 md:w-16 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[1].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <ImageFallback
                      src="/images/call-to-action/pattern-2.png"
                      className="max-md:w-24"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                  </div>
                )}

                {/* Icon 03 */}
                {list?.[2]?.icon && (
                  <div className="absolute right-[12%] top-[10%] flex items-center gap-3">
                    <ImageFallback
                      src="/images/call-to-action/pattern-3.png"
                      className="max-md:w-40"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                    <div className="relative h-12 w-12 md:h-20 md:w-20 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[2].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Icon 04 */}
                {list?.[3]?.icon && (
                  <div className="absolute right-[9%] top-[70%] md:top-[48%]">
                    <ImageFallback
                      src="/images/call-to-action/pattern-4.png"
                      className="max-md:w-40"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                    <div className="relative ml-auto h-12 w-12 md:h-16 md:w-16 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[3].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Icon 05 */}
                {list?.[4]?.icon && (
                  <div className="absolute bottom-[-3%] right-[28%]">
                    <ImageFallback
                      src="/images/call-to-action/pattern-5.png"
                      className="max-md:w-40"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                    <div className="relative ml-auto h-12 w-12 md:h-16 md:w-16 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[4].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Icon 06 */}
                {list?.[5]?.icon && (
                  <div className="absolute bottom-[2%] left-[14%] flex items-center gap-3">
                    <div className="relative h-12 w-12 md:h-20 md:w-20 rounded-full p-px bg-gradient-to-br from-white/10 to-white/40">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-dark">
                        <ImageFallback
                          src={list[5].icon}
                          className="h-1/2 w-1/2"
                          alt="icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <ImageFallback
                      src="/images/call-to-action/pattern-6.png"
                      className="mb-10 max-md:w-40"
                      alt="pattern"
                      width={80}
                      height={80}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 row px-5 md:px-10">
                <div className="mx-auto text-center lg:col-6">
                  <h2
                    dangerouslySetInnerHTML={markdownify(title)}
                    className="has-gradient mb-4"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(description)}
                    className="text-lg opacity-50"
                  />
                  {button?.enable && (
                    <AnimatedAnchor
                      className="btn-primary mt-10"
                      link={button.link}
                      label={button.label}
                    />
                  )}
                </div>
              </div>

              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full bg-gradient-to-tr from-secondary/40 via-secondary to-primary opacity-30 blur-[100px]"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction2;
