import { getListPage } from "@/lib/contentParser";
import CallToAction1 from "@/partials/CallToAction1";
import FeaturesCardLayout from "@/partials/FeaturesCardLayout";
import PricingCompare from "@/partials/PricingCompare";
import PricingSection from "@/partials/PricingSection";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";
import { RegularPage } from "@/types";

const pricing = () => {
  const {
    title,
    description,
    meta_title,
    image,
    features,
  }: RegularPage["frontmatter"] = getListPage("pricing/_index.md").frontmatter;

  const pricingSectionData = getListPage("sections/pricing.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PricingSection data={pricingSectionData} largeHeading />
      <FeaturesCardLayout features={features} />
      <PricingCompare />
      <Testimonial featuredCustomer="David Miller" hideCTAButton />
      <CallToAction1 />
    </>
  );
};

export default pricing;
