import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";

const TestimonialCard = ({
  image,
  name,
  designation,
  style,
  content,
}: {
  image: string;
  name: string;
  designation: string;
  style?: string;
  content?: string;
}) => {
  return (
    <div
      className={`border flex flex-col text-start justify-between border-white/5 lg:w-auto w-[410px] min-h-full bg-dark p-6 ${(style && style) || ""}`}
    >
      {content && <div dangerouslySetInnerHTML={markdownify(content)} />}
      <div className="mt-10 flex items-center">
        <ImageFallback
          src={image}
          className="h-auto w-14"
          alt={name || "brand image"}
          width={56}
          height={56}
        />
        <div className="ml-4">
          {name && (
            <h3
              className="tracking-none text-base md:text-lg"
              dangerouslySetInnerHTML={markdownify(name)}
            />
          )}
          {designation && (
            <p
              className="mt-px text-sm opacity-70"
              dangerouslySetInnerHTML={markdownify(designation)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
