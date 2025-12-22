import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { formatStatNumber } from "@/lib/utils/formatStatNumber";
import CountStat from "@/components/CountStat";

const CustomersLogo = () => {
  const { sections } = getListPage(
    "sections/customers-logo.md"
  ).frontmatter;

  return (
    <section
      className="h-screen"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="container h-full">

        {/* 🔒 FORCE EVERYTHING INTO ONE FRAME */}
        <div className="flex h-full flex-col justify-center gap-3">

          {sections?.map((section: any, idx: number) => (
            <div
              key={idx}
              className="flex-1 flex flex-col justify-center"
            >
              {/* TITLE */}
              <div className="text-center">
                <p
                  className="
                    font-semibold tracking-tight text-white
                    text-[clamp(22px,2.5vw,40px)]
                    leading-tight
                  "
                  dangerouslySetInnerHTML={markdownify(section.title)}
                />
              </div>

              {/* DESCRIPTION */}
              {section.description && (
                <div
                  className="
                    mx-auto mt-2
                    max-w-3xl
                    text-center
                    text-[clamp(13px,1.3vw,18px)]
                    leading-relaxed
                    text-white/80
                  "
                  dangerouslySetInnerHTML={markdownify(
                    section.description,
                    true
                  )}
                />
              )}

              {/* STATS */}
              <div
                className="
                  mt-4
                  grid grid-cols-2 lg:grid-cols-4
                  gap-[clamp(12px,2vw,20px)]
                "
              >
                {section.stats.map((item: any, i: number) => {
                  const { value, suffix } = formatStatNumber(item.number);

                  return (
                    <div
                      key={i}
                      className="
                        relative
                        rounded-xl
                        border border-white/10
                        bg-gradient-to-b from-[#0f1a2f] to-[#0b1324]
                        px-4 pt-10 pb-4
                        text-center
                      "
                    >
                      {/* ICON */}
                      {item.icon && (
                        <div
                          className="
                            absolute -top-4 left-1/2 -translate-x-1/2
                            flex h-8 w-8 items-center justify-center
                            rounded-lg
                            bg-[#141414]/80
                            ring-1 ring-white/10
                          "
                        >
                          <img
                            src={item.icon}
                            alt=""
                            className="h-4 w-4 object-contain"
                            style={{
                              filter:
                                "invert(78%) sepia(53%) saturate(600%) hue-rotate(360deg)",
                            }}
                          />
                        </div>
                      )}

                      {/* NUMBER */}
                      <h2 className="text-[clamp(22px,2.4vw,34px)] font-semibold text-white leading-none">
                        <CountStat number={value} suffix={suffix} />
                      </h2>

                      {/* LABEL */}
                      <p className="mt-1 text-[clamp(12px,1.1vw,15px)] text-white/60">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CustomersLogo;
