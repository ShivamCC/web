import { getListPage } from "@/lib/contentParser";
import CallToAction1 from "@/partials/CallToAction1";
import ContactFormSection from "@/partials/ContactFormSection";
import ContactHero from "@/partials/ContactHero";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");

  return (
    <>
      <SeoMeta {...data.frontmatter} />
      <ContactHero />
      <ContactFormSection />
      <CallToAction1 />
    </>
  );
};

export default Contact;
