import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({
  title = "",
  lastModified,
}: {
  title?: string;
  lastModified?: string;
}) => {
  return (
    <section className="section">
      <div className="container text-center" data-aos="fade-up-sm">
        <div className="rounded-2xl px-8">
          <h1
            className="h2 md:h1 has-gradient mb-4"
            dangerouslySetInnerHTML={{ __html: humanize(title) }}
          />
          <p className="text-lg font-medium opacity-70">
            Last Updated: {lastModified}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
