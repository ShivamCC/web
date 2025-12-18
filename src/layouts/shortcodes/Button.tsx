import AnimatedAnchor from "@/components/AnimatedAnchor";

const Button = ({
  label,
  link,
  style,
  rel,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
}) => {
  return (
    <AnimatedAnchor
      label={label}
      link={link}
      className={`btn mb-4 me-4 no-underline text-white  ${style === "outline" ? "btn-outline-transparent" : "btn-primary"
        }`}
      rel={rel}
    />
  );
};

export default Button;
