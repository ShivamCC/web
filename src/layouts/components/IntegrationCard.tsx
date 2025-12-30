import ImageFallback from "@/helpers/ImageFallback";
// import { markdownify } from "@/lib/utils/textConverter";

const IntegrationCard = ({
  image,
  style = "rounded-xl",
  name,
}: {
  image: string;
  style?: string;
  name?: string;
}) => {
  return (
    <div
      className={`w-full h-40 md:h-52 flex items-center justify-center overflow-hidden bg-dark ${style}`}


    >
      <ImageFallback
        src={image}
        className="h-[70%] w-[70%] object-contain"
        alt={name || "brand image"}
        width={260}
        height={160}
      />
    </div>
  );
};

export default IntegrationCard;
