import AnimatedAnchor from "@/components/AnimatedAnchor";
import AnimatedTestimonialList from "@/components/AnimatedTestimonialList";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type Testimonial } from "@/types";

const Testimonial = ({
  featuredCustomer,
  hideCTAButton,
}: {
  featuredCustomer: string;
  hideCTAButton?: boolean;
}) => {
  let { title, subtitle, button, list }: Testimonial["frontmatter"] =
    getListPage("sections/testimonial.md").frontmatter;

  // Exclude featured item from list
  list = list.filter((item) => !item.featured);

  let firstList = list.slice(0, Math.floor(list.length / 2));
  firstList = [...firstList, ...firstList];
  let secondList = list.slice(Math.floor(list.length / 2), list.length);
  secondList = [...secondList, ...secondList].reverse();
  let thirdList = list.slice(Math.floor(list.length / 2), list.length);
  thirdList = [...thirdList, ...thirdList];

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div
            className="mx-auto text-center lg:col-8 xl:col-9"
            data-aos="fade-up-sm"
          >
            {subtitle && (
              <p
                className="mb-4 text-xl/[inherit] font-medium text-blue-400"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}

            {title && (
              <h2
                className="has-gradient"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
          </div>

          {/* Featured Testimonial */}
          <FeaturedTestimonial featuredCustomer={featuredCustomer} />

          {/* Regular Testimonial */}
          <div className="col-12 text-center">
            <div className="row gy-4 relative mt-14 flex overflow-hidden lg:gx-4 before:pointer-events-none before:absolute before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-body before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:to-body after:content-[''] before:md:w-40 after:md:w-40 lg:h-[800px] before:lg:h-40 before:lg:w-full before:lg:bg-gradient-to-b after:lg:h-40 after:lg:w-full after:lg:bg-gradient-to-b">
              <div className="lg:col-4">
                <AnimatedTestimonialList list={firstList} />
              </div>
              <div className="lg:col-4">
                <AnimatedTestimonialList list={secondList} />
              </div>
              <div className="lg:col-4">
                <AnimatedTestimonialList list={thirdList} />
              </div>
            </div>
            {!hideCTAButton && button && button.enable && (
              <AnimatedAnchor
                label={button.label}
                link={button.link}
                className="btn-primary mt-10"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
