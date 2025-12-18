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
    <section className="section overflow-hidden">
      <div className="container">
        <div className="row">
          {/* HEADER */}
          <div className="lg:col-10" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>

          {/* TEAM CARDS */}
          <div className="col-12 pt-24">
            <div className="row gx-6 gy-10">
              {list?.map((item: Team, i: number) => (
                <div
                  className="lg:col-4"
                  key={i}
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 120}
                  data-aos-duration="900"
                  data-aos-easing="cubic-bezier(0.22, 1, 0.36, 1)"
                >
                  {/* SLAM CONTAINER */}
                  <div
                    className="
                      relative
                      will-change-transform
                      transition-transform
                    "
                  >
                    <TeamCard data={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
