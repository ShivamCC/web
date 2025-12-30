import type { Metadata } from "next";
import FeaturesCardLayout from "@/layouts/partials/FeaturesCardLayout";

export const metadata: Metadata = {
  title: "Restaurant Consulting Services | Culinary Compass",
  description:
    "Explore our restaurant growth services including menu engineering, pricing strategy, POS optimization, and operational excellence.",

  openGraph: {
    title: "Restaurant Consulting Services | Culinary Compass",
    description:
      "Helping restaurants scale and improve profitability with data-driven consulting services.",
  },
};

export default function ServicesPage() {
  return <FeaturesCardLayout />;
}
