import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Team } from "@/types";

const TeamCard = ({ data }: { data: Team }) => {
  const {
    avatar,
    name,
    designation,
    content,
    social,
    style,
  } = data || {};

  return (
    <div
      className={`
        group relative flex h-full flex-col
        rounded-2xl border border-white/10
        bg-white/5 p-6 text-center
        transition-all duration-300
        hover:shadow-xl hover:shadow-black/40

        ${style || ""}
      `}
    >
      {/* ================= AVATAR ================= */}
      {avatar && (
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/10 transition group-hover:ring-white/30">
          <ImageFallback
            src={avatar}
            alt={name || "team member"}
            width={96}
            height={96}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      )}

      {/* ================= NAME ================= */}
      {name && (
        <h3
          className="mt-5 text-lg font-semibold tracking-tight"
          dangerouslySetInnerHTML={markdownify(name)}
        />
      )}

      {/* ================= DESIGNATION ================= */}
      {designation && (
        <p
          className="mt-1 text-sm font-medium text-white/70"
          dangerouslySetInnerHTML={markdownify(designation)}
        />
      )}

      {/* ================= BIO / CONTENT ================= */}
      {content && (
        <p
          className="mt-4 text-sm leading-relaxed text-white/80"
          dangerouslySetInnerHTML={markdownify(content)}
        />
      )}

      {/* ================= SOCIAL (BOTTOM) ================= */}
      {Array.isArray(social) && social.length > 0 && (
        <div className="mt-auto pt-6">
          <div className="flex justify-center gap-3">
            {social.map(
              (item: { name: string; icon: string; url: string }) => (
                <a
                  key={item.name}
                  href={item.url}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="
                    group/social flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/5
                    transition-all duration-300
                    hover:scale-110 hover:bg-[#0A66C2]
                  "
                >
                  <span className="sr-only">{item.name}</span>

                  {item.icon.startsWith("/images/") ? (
                    <ImageFallback
                      src={item.icon}
                      alt={item.name}
                      width={16}
                      height={16}
                      className="
                        h-4 w-4 object-contain
                        transition-all duration-300
                        group-hover/social:brightness-0
                        group-hover/social:invert
                      "
                    />
                  ) : (
                    <DynamicIcon
                      icon={item.icon}
                      className="
                        h-4 w-4
                        transition-colors duration-300
                        group-hover/social:text-white
                      "
                    />
                  )}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
