import AnimatedAnchor from "@/components/AnimatedAnchor";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { PriceCompare } from "@/types";
import React from "react";

const PricingCompare = ({ largeHeading }: { largeHeading?: boolean }) => {
  let { title, plans, plans_features }: PriceCompare["frontmatter"] =
    getListPage("sections/pricing-compare.md").frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className="mx-auto text-center lg:col-8 xl:col-7"
            data-aos="fade-up-sm"
          >
            {title && largeHeading ? (
              <h1
                className="has-gradient"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            ) : (
              <h2
                className="has-gradient"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
          </div>
          <div className="col-12 pt-20">
            <div className="row g-0">
              <div className="lg:col-9 lg:offset-3">
                <div className="row gx-0">
                  {plans.map((plan, index: number) => (
                    <div
                      key={index}
                      className={`col relative pt-5 lg:col-4 ${(index === 1 && "lg:rounded-t-lg lg:border lg:border-b-0 lg:border-border") || ""}`}
                    >
                      <div className="flex min-h-full flex-col items-center justify-center">
                        {plan.title && (
                          <span
                            className="mb-4 text-lg/none"
                            dangerouslySetInnerHTML={markdownify(plan.title)}
                          />
                        )}
                        {plan.price && (
                          <strong className="h5 tracking-none font-semibold">
                            {plan.price}
                          </strong>
                        )}
                        {plan.button && (
                          <AnimatedAnchor
                            className="btn-primary max-sm:text-center max-sm:text-xs mt-8"
                            link={plan.button.link}
                            label={plan.button.label}
                          />
                        )}

                        {index === 1 && (
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-4 top-1/2 -z-10 h-[120px] w-[95%] rotate-[19deg] rounded-full from-secondary via-secondary via-60% opacity-60 blur-3xl bg-gradient-to-l"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {plans_features.map(
              (
                { group, list }: { group: string; list: any[] },
                index: number,
              ) =>
                group && (
                  <React.Fragment key={index}>
                    <div className="overflow-x-hidden max-lg:mt-10">
                      <div className="row g-0">
                        <div className="border-b border-border text-start text-white lg:col-3">
                          <div className="flex h-full items-end justify-between px-3 py-3 sm:px-6 sm:py-6 lg:pl-8 lg:pr-2">
                            <div
                              className="text-lg font-medium capitalize"
                              dangerouslySetInnerHTML={markdownify(group)}
                            />
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="hidden lg:col-9 lg:block"
                        >
                          <div className="row g-0">
                            <div className="border-b border-border lg:col-4" />
                            <div
                              className={`${!(index === 0) ? "lg:h-[120px] lg:border-white/5 lg:bg-dark/50" : "lg:h-[76px] lg:border-border"} lg:col-4 lg:border lg:border-t-0`}
                            />
                            <div className="border-b border-border lg:col-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {list.map((item, i: number) => (
                        <div key={i} className="overflow-x-hidden">
                          <div className="row g-0">
                            <div className="border-b border-border text-start text-white lg:col-3">
                              <div className="flex h-full items-center justify-between px-3 py-3 sm:px-6 sm:py-6 lg:pl-8 lg:pr-2">
                                <div
                                  className="text-xs font-medium capitalize opacity-70 sm:text-base"
                                  dangerouslySetInnerHTML={markdownify(
                                    item.value,
                                  )}
                                />
                              </div>
                            </div>
                            <div className="lg:col-9">
                              <div className="row g-0">
                                {!(item.basic === "") && (
                                  <div className="col flex items-center justify-center border-b border-border lg:col-4">
                                    <div className="px-3 py-3 text-[10px] sm:py-6 sm:text-base">
                                      {item.basic === true ? (
                                        <ImageFallback
                                          src="/images/icons/svg/check.svg"
                                          alt="icon"
                                          width={24}
                                          height={24}
                                        />
                                      ) : item.basic === false ? (
                                        <ImageFallback
                                          src="/images/icons/svg/cross.svg"
                                          alt="icon"
                                          width={16}
                                          height={16}
                                        />
                                      ) : (
                                        <span>{item.basic}</span>
                                      )}
                                    </div>
                                  </div>
                                )}
                                {!(item.standard === "") && (
                                  <div className="col flex items-center justify-center border border-t-0 border-border lg:col-4 lg:border-white/5 lg:bg-dark/50">
                                    <div className="px-3 py-3 text-[10px] sm:py-6 sm:text-base">
                                      {item.standard === true ? (
                                        <ImageFallback
                                          src="/images/icons/svg/check.svg"
                                          alt="icon"
                                          width={24}
                                          height={24}
                                        />
                                      ) : item.standard === false ? (
                                        <ImageFallback
                                          src="/images/icons/svg/cross.svg"
                                          alt="icon"
                                          width={16}
                                          height={16}
                                        />
                                      ) : (
                                        <span>{item.standard}</span>
                                      )}
                                    </div>
                                  </div>
                                )}
                                {!(item.pro === "") && (
                                  <div className="col flex items-center justify-center border-b border-border lg:col-4">
                                    <div className="px-3 py-3 text-[10px] sm:py-6 sm:text-base">
                                      {item.pro === true ? (
                                        <ImageFallback
                                          src="/images/icons/svg/check.svg"
                                          alt="icon"
                                          width={24}
                                          height={24}
                                        />
                                      ) : item.pro === false ? (
                                        <ImageFallback
                                          src="/images/icons/svg/cross.svg"
                                          alt="icon"
                                          width={16}
                                          height={16}
                                        />
                                      ) : (
                                        <span>{item.pro}</span>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCompare;
