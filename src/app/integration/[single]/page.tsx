import { getSinglePage } from "@/lib/contentParser";
import CallToAction2 from "@/partials/CallToAction2";
import IntegrationSingle from "@/partials/IntegrationSingle";
import SeoMeta from "@/partials/SeoMeta";
import { Integration } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const integrations = getSinglePage("integration");

  const paths = integrations.map((integration) => ({
    single: integration.slug!,
  }));

  return paths;
};

const IntegrationSinglePage = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const integrations: Integration[] = getSinglePage("integration");
  const integration = integrations.find((item) => item.slug === params.single);

  return (
    <>
      <SeoMeta />
      <IntegrationSingle integration={integration!} />
      <CallToAction2 />
    </>
  );
};

export default IntegrationSinglePage;
