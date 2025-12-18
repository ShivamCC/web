import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Team } from "@/types";

const TeamCard = ({ data }: { data: Team }) => {
  const { avatar, name, designation, content, social, style } = data;

  return (
    <div className={` min-h-full ${(style && style) || ""}`}>
      <div className="h-20 w-20 overflow-hidden rounded-full">
        <ImageFallback
          src={avatar}
          className="rounded-full"
          alt={name || "avatar of team member"}
          width={80}
          height={80}
        />
      </div>
      {name && (
        <h3
          className="tracking-none mt-4 text-base md:text-lg"
          dangerouslySetInnerHTML={markdownify(name)}
        />
      )}
      {designation && (
        <p
          className="opacity-70"
          dangerouslySetInnerHTML={markdownify(designation)}
        />
      )}
      {content && (
        <p
          className="mt-4 opacity-80"
          dangerouslySetInnerHTML={markdownify(content)}
        />
      )}

      {social && (
        <ul className="mt-6 flex gap-3">
          {social.map((social: { name: string; icon: string; url: string }) => (
            <li key={social.name}>
              <a
                aria-label={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon.startsWith("/images/") ? (
                  <div className="relative flex h-12 w-12 items-center justify-center after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:to-slate-800/25 after:transition-all after:duration-300 after:content-[''] hover:after:scale-y-[-1]">
                    <ImageFallback
                      className="h-4 w-4 object-cover"
                      src={social.icon}
                      alt={`icon related to ${social.name}`}
                      width={16}
                      height={16}
                    />
                  </div>
                ) : (
                  <DynamicIcon className="inline-block" icon={social.icon} />
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamCard;
