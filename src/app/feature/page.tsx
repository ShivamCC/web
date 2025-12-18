import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import { getListPage } from "@/lib/contentParser";
import CallToAction2 from "@/partials/CallToAction2";
import FeaturesGrid from "@/partials/FeaturesGrid";
import FeaturesStickyLayout from "@/partials/FeaturesStickyLayout";
import SeoMeta from "@/partials/SeoMeta";

const page = () => {
  const featureIndex = getListPage("feature/_index.md");
  return (
    <>
      <SeoMeta {...featureIndex.frontmatter} />
      <FeaturesGrid largeHeading />
      <FeaturesStickyLayout sticky={false} />
      <section className="section pt-0">
        <div className="container">
          {/* <FeaturedTestimonial
            alternateLayout
            featuredCustomer={"Amin"}
          /> */}
        </div>
      </section>
      <CallToAction2 />
    </>
  );
};

export default page;
