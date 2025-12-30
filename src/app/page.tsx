import CallToAction1 from "@/partials/CallToAction1";
import CustomersLogo from "@/partials/CustomersLogo";
import FeaturesCardLayout from "@/partials/FeaturesCardLayout";
// import FeaturesStickyLayout from "@/partials/FeaturesStickyLayout";
import HomeBanner from "@/partials/HomeBanner";
import IntegrationSection from "@/partials/IntegrationSection";
import SeoMeta from "@/partials/SeoMeta";
import Testimonial from "@/partials/Testimonial";

const Home = () => {
  return (
    <>
      <SeoMeta />
      <HomeBanner />
      <IntegrationSection />
      <CustomersLogo />
      {/* <FeaturesStickyLayout /> */}
      <FeaturesCardLayout />
      <Testimonial featuredCustomer="Amin" />
      <CallToAction1 />
    </>
  );
};

export default Home;
