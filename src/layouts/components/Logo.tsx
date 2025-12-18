"use client";

import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";

const Logo = ({
  src,
  style,
  footerLogo,
}: {
  src?: string;
  style?: React.CSSProperties;
  footerLogo?: boolean;
}) => {
  const {
    logo,
    logo_footer,
    logo_width,
    logo_footer_width,
    logo_height,
    logo_footer_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_footer: string;
    logo_width: string | number;
    logo_footer_width: string | number;
    logo_height: string | number;
    logo_footer_height: string | number;
    logo_text: string;
    title: string;
  } = config.site;

  return (
    <Link
      href="/"
      className={`navbar-brand inline-block${
        !logo || !logo_footer ? " logo-text" : ` `
      }`}
    >
      {src || logo || logo_footer ? (
        <>
          {footerLogo ? (
            <ImageFallback
              src={logo_footer ? logo_footer : src || "/images/logo.svg"}
              className={`inline-block ${style ? style : ""}`}
              width={parseInt(logo_footer_width.replace("px", "")) * 2}
              height={parseInt(logo_footer_height.replace("px", "")) * 2}
              alt={title}
              style={{
                height: logo_footer_height.replace("px", "") + "px",
                width: logo_footer_width.replace("px", "") + "px",
              }}
            />
          ) : (
            <ImageFallback
              src={src ? src : logo}
              className={`inline-block ${style ? style : ""}`}
              width={parseInt(logo_width.replace("px", "")) * 2}
              height={parseInt(logo_height.replace("px", "")) * 2}
              alt={title}
              style={{
                height: logo_height.replace("px", "") + "px",
                width: logo_width.replace("px", "") + "px",
              }}
            />
          )}
        </>
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
