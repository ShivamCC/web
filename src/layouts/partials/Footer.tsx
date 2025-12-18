import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Image from "next/image";

const Footer = () => {
  const { footer, company, resources, contact } = menu;

  function replaceYear(text: string) {
    const year = new Date().getFullYear();
    return text.replace("{year}", year.toString());
  }

  const headingClass =
    "mb-6 text-sm font-medium leading-none tracking-normal text-white/60 antialiased";

  return (
    <footer className="py-10 md:py-16 xl:py-24">
      <div className="container" data-aos="fade-up-sm">
        {/* LOGO */}
        <div className="pb-7 md:pb-14">
          <Logo footerLogo />
        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid gap-10
            lg:grid-cols-[180px_180px_260px_1fr]
            items-start
          "
        >
          {/* Company */}
          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className="font-medium text-text/90 hover:text-text/60"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={headingClass}>Resources</h3>
            <ul className="flex flex-col gap-3">
              {resources.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className="font-medium text-text/90 hover:text-text/60"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — ICON BASED (FIXED) */}
          <div>
            <h3 className={headingClass}>{contact.title}</h3>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-text/80">
              <Image
                src={contact.address.icon}
                alt={contact.address.title}
                width={16}
                height={16}
                className="mt-1 opacity-70"
              />
              <p className="whitespace-pre-line leading-relaxed">
                {contact.address.value}
              </p>
            </div>

            {/* Phone + Email */}
            <ul className="mt-4 flex flex-col gap-3">
              {contact.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-text/80 hover:text-text"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                      className="opacity-70"
                    />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MAP */}
          <div className="h-full overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mumbai Location"
              src="https://www.google.com/maps?q=19.1037606,72.8866452&z=16&output=embed"
              className="h-[260px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-border pt-8 flex flex-col md:flex-row justify-between">
          {config.params.copyright && (
            <p className="text-sm text-white/60">
              {replaceYear(config.params.copyright)}
            </p>
          )}

          <ul className="flex gap-4">
            {footer?.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  className="text-sm text-white/60 hover:text-secondary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
