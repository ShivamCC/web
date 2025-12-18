import { getListPage } from "@/lib/contentParser";
import AboutBanner from "@/partials/AboutBanner";
import CallToAction1 from "@/partials/CallToAction1";
import CareerCta from "@/partials/CareerCta";
import OurTeam from "@/partials/OurTeam";
import SeoMeta from "@/partials/SeoMeta";
import Values from "@/partials/Values";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");

  return (
    <>
      <SeoMeta {...data.frontmatter} />
      <AboutBanner />
      <Values />
      <OurTeam />
      <CareerCta />
      <CallToAction1 />
    </>
  );
};

export default About;
