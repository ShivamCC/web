import DynamicIcon from "@/helpers/DynamicIcon";

interface Props {
  link: string;
  label: string;
  className?: string;
  fullWidth?: boolean;
  hideIcon?: boolean;
  [key: string]: any;
}

const AnimatedAnchor = ({
  link,
  label,
  className,
  fullWidth,
  hideIcon,
  ...rest
}: Props) => {
  return (
    <a
      className={`btn${className ? ` ${className}` : ""}${fullWidth ? ` full-width` : ""}${!hideIcon ? ` has-icon` : ""}`}
      href={link}
      {...rest}
      target={link.startsWith("http") ? "_blank" : "_self"}
    >
      <span className="value">
        <span data-content={label}>{label}</span>
      </span>
      {!hideIcon && (
        <span className="icon">
          <span>
            <span>
              <DynamicIcon className="text-xs" icon={"FaChevronRight"} />
            </span>
            <span>
              <DynamicIcon
                aria-hidden={true}
                className="text-xs"
                icon={"FaChevronRight"}
              />
            </span>
          </span>
        </span>
      )}
    </a>
  );
};

export default AnimatedAnchor;
