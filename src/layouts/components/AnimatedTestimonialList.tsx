import { Testimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";

const AnimatedTestimonialList = ({
  list,
  direction,
}: {
  list: Testimonial["frontmatter"]["list"];
  direction?: "normal" | "reverse";
}) => {
  return (
    <div className="marquee-wrapper on-hover-pause-animation flex gap-5 overflow-hidden lg:flex-col">
      <div
        className={`marquee ${direction === "reverse" ? "marquee-reverse" : "marquee-vertical"}  marquee-duration-120 flex shrink-0 lg:flex-col items-center justify-center gap-5`}
      >
        {list.map(({ content, customer }, index: number) => (
          <TestimonialCard
            key={index}
            content={content}
            image={customer.avatar}
            name={customer.name}
            designation={customer.designation}
          />
        ))}
      </div>
      <div
        className={`marquee  ${direction === "reverse" ? "marquee-reverse" : "marquee-vertical"} marquee-duration-120 flex shrink-0 lg:flex-col items-center justify-center gap-5`}
        aria-hidden="true"
      >
        {list.map(({ content, customer }, index: number) => (
          <TestimonialCard
            key={index}
            content={content}
            image={customer.avatar}
            name={customer.name}
            designation={customer.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTestimonialList;
