"use client";

import AnimatedAnchor from "@/components/AnimatedAnchor";
import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { type PricingSection } from "@/types";
import { useEffect } from "react";

const PricingSection = ({
  largeHeading,
  data,
}: {
  largeHeading?: boolean;
  data: PricingSection["frontmatter"];
}) => {
  let { title, description, plans_labels, discount, plans } = data;

  useEffect(() => {
    const toggleSwitch =
      document.querySelector<HTMLInputElement>(".pricing-check");
    const numbers = document.querySelectorAll<HTMLSpanElement>(".data-count");

    const toggleVisibility = (
      selector: string,
      addClass: string,
      removeClass: string,
    ) => {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((element) => {
        element.classList.add(addClass);
        element.classList.remove(removeClass);
      });
    };

    const animateCounter = (element: HTMLElement, endValue: number) => {
      let startValue = 0;
      const duration = 250;
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const value =
          Math.min(progress / duration, 1) * (endValue - startValue) +
          startValue;
        element.innerHTML = Math.ceil(value).toString();
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const handleToggle = () => {
      if (!toggleSwitch) return;
      if (toggleSwitch.checked) {
        numbers.forEach((number) => {
          const yearlyCount = number.getAttribute("data-count-yearly");
          if (yearlyCount) {
            number.innerHTML = yearlyCount;
            animateCounter(number, parseInt(yearlyCount, 10));
          }
        });
        toggleVisibility(".text-yearly", "d-block", "hidden");
        toggleVisibility(".text-monthly", "hidden", "d-block");
      } else {
        numbers.forEach((number) => {
          const monthlyCount = number.getAttribute("data-count-monthly");
          if (monthlyCount) {
            number.innerHTML = monthlyCount;
            animateCounter(number, parseInt(monthlyCount, 10));
          }
        });
        toggleVisibility(".text-monthly", "d-block", "hidden");
        toggleVisibility(".text-yearly", "hidden", "d-block");
      }
    };

    toggleSwitch?.addEventListener("change", handleToggle);

    return () => {
      toggleSwitch?.removeEventListener("change", handleToggle);
    };
  }, []);

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
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            ) : (
              <h2
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div className="col-12 pt-20">
            <div className="row gx-2">
              <div
                className="col-12 pb-16"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                <div className="flex items-center justify-center gap-x-3">
                  {plans_labels.map((plan, index: number) => (
                    <span
                      key={index}
                      className={`select-none ${index === 0 ? "order-0" : "order-3"}`}
                      dangerouslySetInnerHTML={markdownify(plan)}
                    />
                  ))}
                  <label className="order-1 relative inline-block h-7 w-12 cursor-pointer rounded-full bg-secondary">
                    <span className="sr-only">Pricing Switcher</span>
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="pricing-check peer w-full cursor-pointer opacity-0"
                    />
                    <span className="absolute left-0 top-0 cursor-pointer before:absolute before:left-1 before:top-1 before:h-5 before:w-5 before:translate-x-0 before:rounded-full before:bg-white before:transition-all before:delay-75 before:duration-300 peer-checked:before:translate-x-5" />
                  </label>
                  {discount && (
                    <span
                      className="order-3 rounded-full bg-white bg-gradient-to-b from-white to-dark/50 px-3 py-1 text-sm font-bold text-dark"
                      dangerouslySetInnerHTML={markdownify(discount)}
                    />
                  )}
                </div>
              </div>

              {plans?.map((item, index: number) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={200 + index * 150}
                >
                  <div
                    className={`${item.active ? "active border border-border" : ""} group relative mb-12 flex min-h-full flex-col overflow-hidden rounded-lg bg-body px-8 py-12 last:mb-0 md:px-11`}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      {item.title && (
                        <h3 className="counter h6 tracking-none">
                          <span
                            dangerouslySetInnerHTML={markdownify(item.title)}
                          />
                        </h3>
                      )}
                    </div>
                    {item.description && (
                      <p
                        className="mt-2 opacity-70"
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}
                    <div className="mb-8 mt-10 flex flex-col gap-2 sm:flex-row sm:items-end">
                      {item.price_monthly && item.price_yearly && (
                        <strong className="h1 font-medium leading-[1]">
                          <span
                            dangerouslySetInnerHTML={markdownify(
                              item.price_prefix || "",
                            )}
                          />
                          <span
                            className="data-count"
                            data-count-yearly={item.price_yearly}
                            data-count-monthly={item.price_monthly}
                            dangerouslySetInnerHTML={markdownify(
                              item.price_monthly,
                            )}
                          />
                        </strong>
                      )}
                      {item.price_description_monthly &&
                        item.price_description_yearly && (
                          <>
                            <span
                              className="text-monthly opacity-70"
                              dangerouslySetInnerHTML={markdownify(
                                item.price_description_monthly,
                              )}
                            />
                            <span
                              className="text-yearly hidden opacity-70"
                              dangerouslySetInnerHTML={markdownify(
                                item.price_description_yearly,
                              )}
                            />
                          </>
                        )}
                    </div>

                    {item.button && item.button.enable && (
                      <AnimatedAnchor
                        className="btn-primary justify-center"
                        link={item.button.link}
                        fullWidth={true}
                        label={item.button.label}
                      />
                    )}
                    {item.features && (
                      <ul className="mt-8 flex flex-col space-y-4">
                        {item.features.map((feature, i: number) => (
                          <li key={i}>
                            <DynamicIcon
                              icon="FaCheck"
                              className="text-white inline-block mr-2.5 text-base"
                            />
                            <span
                              dangerouslySetInnerHTML={markdownify(feature)}
                            />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Overlay */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none invisible absolute -right-12 bottom-0 z-0 h-[176px] w-[294px] rotate-[19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-80 blur-[82px] bg-gradient-to-tr group-[.active]:visible"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
