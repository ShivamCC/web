import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { formatStatNumber } from "@/lib/utils/formatStatNumber";
import CountStat from "@/components/CountStat";

const CustomersLogo = () => {
  const { sections } = getListPage(
    "sections/customers-logo.md"
  ).frontmatter;

  return (
    <>
      {sections?.map((section: any, idx: number) => (
        <section key={idx} className="section font-primary">
          <div className="container">

            {/* TITLE */}
            <div className="text-center" data-aos="fade-up-sm">
              <p
                className="text-4xl/snug
    md:text-5xl
    font-semibold
    tracking-tight
    text-white"
                dangerouslySetInnerHTML={markdownify(section.title)}
              />
            </div>

            {/* DESCRIPTION */}
            {section.description && (
              <div
                className="mx-auto mt-5
    max-w-3xl
    text-center
    text-lg
    md:text-xl
    font-medium
    leading-relaxed
    text-white/85"
                dangerouslySetInnerHTML={markdownify(section.description, true)}
              />
            )}

            {/* STATS */}
            <div className="pt-28 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {section.stats.map((item: any, i: number) => {
                const { value, suffix } = formatStatNumber(item.number);

                return (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                    className="
                      relative group
                      rounded-2xl
                      border border-white/10
                      bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]
                      bg-gradient-to-b from-[#0f1a2f] to-[#0b1324]
                      px-8 pb-8 pt-16
                      text-center
                      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    {/* FLOATING ICON (NORMALIZED) */}
                    {item.icon && (
                      <div
                        data-aos="zoom-in"
                        data-aos-delay={i * 90}
                        className="
                          absolute -top-6 left-1/2 -translate-x-1/2
                          flex h-12 w-12 items-center justify-center
                          rounded-xl
                          bg-[#141414]/80
                          ring-1 ring-white/10
                          backdrop-blur
                          shadow-[0_0_24px_rgba(255,193,74,0.22)]
                          transition
                          group-hover:shadow-[0_0_32px_rgba(255,193,74,0.32)]
                        "
                      >
                        {/* INNER FIXED FRAME = SAME VIEW FOR ALL ICONS */}
                        <div className="relative h-6 w-6 flex items-center justify-center">
                          <img
                            src={item.icon}
                            alt={`${item.label} icon`}
                            className="max-h-full max-w-full object-contain scale-[0.85]"
                            style={{
                              filter:
                                "invert(78%) sepia(53%) saturate(600%) hue-rotate(360deg)",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* NUMBER */}
                    <h2
                      data-aos="fade-up"
                      data-aos-delay={i * 90 + 160}
                      className="text-[42px] font-semibold text-white tracking-tight leading-none"
                    >
                      <CountStat number={value} suffix={suffix} />
                    </h2>

                    {/* LABEL */}
                    <p
                      data-aos="fade-up"
                      data-aos-delay={i * 90 + 300}
                      className="mt-3 text-[16.5px] text-white/60"
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CustomersLogo;
