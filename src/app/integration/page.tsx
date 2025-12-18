import { getListPage } from "@/lib/contentParser";
import CallToAction2 from "@/partials/CallToAction2";
import IntegrationCardLayout from "@/partials/IntegrationCardLayout";
import IntegrationSection from "@/partials/IntegrationSection";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

// for all regular pages
const IntegrationPage = () => {
  const { title, description, meta_title, image }: RegularPage["frontmatter"] =
    getListPage(`integration/_index.md`).frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <IntegrationSection
        largeHeading
        hideBackground
        fluidContainer
        hideCTAButton
        hideHeadingOverlay
      />
      <IntegrationCardLayout />
      <CallToAction2 />
    </>
  );
};

export default IntegrationPage;
