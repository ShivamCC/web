import TeamCard from "@/components/TeamCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Team } from "@/types";
import React from "react";

const OurTeam = () => {
  const { title, description, list } = getListPage(
    "sections/our-team.md",
  ).frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {/* ================= HEADER ================= */}
          <div
            className="mx-auto text-center lg:col-10"
            data-aos="fade-up-sm"
          >
            {title && (
              <h2
                className="has-gradient mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}

            <div className="mx-auto mb-6 h-[2px] w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />

            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* ================= TEAM CARDS ================= */}
          <div className="col-12 pt-24">
            <div className="row gx-6 gy-16">
              {list?.map((item: Team, i: number) => {
                // 🔥 YAHI PE LINKEDIN LABEL ADD HO RAHA HAI
                const updatedItem: Team = {
                  ...item,
                  social: item.social?.map((s) =>
                    s.name === "linkedin"
                      ? { ...s, label: "Connect" }
                      : s,
                  ),
                };

                return (
                  <div
                    key={i}
                    className="lg:col-4 mb-12"
                    data-aos="zoom-in-up"
                    data-aos-delay={i * 120}
                    data-aos-duration="900"
                    data-aos-easing="cubic-bezier(0.22, 1, 0.36, 1)"
                  >
                    <div className="relative h-full overflow-visible">
                      <TeamCard data={updatedItem} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
