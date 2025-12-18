import AnimatedAnchor from "@/components/AnimatedAnchor";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const CareerCta = () => {
  const { title, description, button, jobs } = getListPage(
    "sections/career-cta.md"
  ).frontmatter;

  const isTwoCards = Array.isArray(jobs) && jobs.length === 2;

  return (
    <section className="section">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-6"
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
        </div>

        {/* Job Cards */}
        {Array.isArray(jobs) && jobs.length > 0 && (
          <div className="row mt-16" data-aos="fade-up-sm">
            <div className="col-12">
              <div
                className={`grid gap-8 ${
                  isTwoCards
                    ? "mx-auto max-w-4xl md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {jobs.map((job: any, i: number) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-border bg-body/60 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Role */}
                    <h3 className="text-lg font-medium leading-snug tracking-normal text-white">
                      {job.role}
                    </h3>

                    <div className="my-3 h-px w-10 bg-white/20" />

                    {/* Summary */}
                    <p className="mb-6 text-sm leading-relaxed text-text/70">
                      {job.summary}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text/60">
                        📍 {job.location}
                      </span>

                      <div className="flex items-center gap-4">
                        {/* Download JD */}
                        {job.jd && (
  <a
    href={job.jd}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
  >
    {/* PDF Icon */}
    <span className="flex h-6 w-6 items-center justify-center rounded bg-red-500/20 text-red-400 text-[10px] font-semibold">
      PDF
    </span>

    {/* File name */}
    <span className="max-w-[140px] truncate">
      Job_Description.pdf
    </span>
  </a>
)}


                        {/* Apply */}
                        {/* ✅ Apply — PER CARD */}
{job.apply && (
  <a
    href={job.apply}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
  >
    Apply
  </a>
)}

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {button && (
          <div className="row mt-16" data-aos="fade-up-sm">
            <div className="col-12 text-center">
              <AnimatedAnchor
                className="btn-primary"
                link={button.link}
                label={button.label}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CareerCta;
