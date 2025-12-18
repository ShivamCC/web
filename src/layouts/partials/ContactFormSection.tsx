import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const ContactFormSection = () => {
  const { contact_form_action } = config.params;
  const {
    contact_form,
  }: { contact_form: RegularPage["frontmatter"]["contact_form"] } =
    getListPage("contact/_index.md").frontmatter;
  return (
    <section className="section">
      <div className="container relative">
        <div className="row gy-5">
          <div className="lg:col-5" data-aos="fade-left-sm">
            <div className="flex min-h-full flex-col justify-between">
              {contact_form?.title && (
                <h2
                  className="has-gradient md:mb-6"
                  dangerouslySetInnerHTML={markdownify(contact_form.title)}
                />
              )}
              {contact_form?.list && (
                <div className="mt-10 flex flex-col gap-4 md:gap-8 xl:mt-20">
                  {contact_form.list.map(
                    (
                      point: {
                        icon: string;
                        title: string;
                        description: string;
                      },
                      i: number,
                    ) => (
                      <div key={i} className="flex gap-4">
                        {point.icon && (
                          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-b from-white/10 to-slate-800/25">
                            <ImageFallback
                              className="h-5 w-5 invert brightness-0"
                              src={point.icon}
                              alt={`icon related to ${point.title}`}
                              width={28}
                              height={28}
                            />
                          </div>
                        )}
                        <div>
                          {point.title && (
                            <h3
                              className="tracking-none mb-3 text-lg/none"
                              dangerouslySetInnerHTML={markdownify(point.title)}
                            />
                          )}
                          {point.description && (
                            <p
                              className="text-lg/none opacity-70"
                              dangerouslySetInnerHTML={markdownify(
                                point.description,
                              )}
                            />
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            className="lg:col-7 lg:ps-16"
            data-aos="fade-left-sm"
            data-aos-delay="200"
          >
            <div className="rounded-2xl border border-white/5 bg-dark p-5 md:p-16">
              <form
  className="row g-4"
  action={contact_form_action}
  method="post"
>
  <div className="lg:col-6">
    <label htmlFor="name" className="form-label">
      First Name <span className="text-red-500">*</span>
    </label>
    <input
      id="name"
      name="name"
      className="form-input"
      required
      type="text"
    />
  </div>

  <div className="lg:col-6">
    <label htmlFor="email" className="form-label">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      id="email"
      name="email"
      className="form-input"
      required
      type="email"
    />
  </div>

  {/* BRAND NAME */}
  <div className="col-12">
    <label htmlFor="company-name" className="form-label">
      Brand Name <span className="text-red-500">*</span>
    </label>
    <input
      id="company-name"
      name="company-name"
      className="form-input"
      required
      type="text"
    />
  </div>

  {/* NUMBER OF OUTLETS */}
  <div className="col-12">
    <label htmlFor="outlets" className="form-label">
      Number of Outlets <span className="text-red-500">*</span>
    </label>
    <input
      id="outlets"
      name="outlets"
      className="form-input"
      required
      type="number"
      min={1}
      placeholder="e.g. 1, 5, 20"
    />
  </div>

  {/* MESSAGE */}
  <div className="col-12">
    <label htmlFor="message" className="form-label">
      Write Message <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      className="form-input"
      required
      rows={3}
    />
  </div>

  <div className="col-12">
    <button
      type="submit"
      className="btn rounded-full border-border text-white"
    >
      <span className="value">
        <span data-content="Send Message">Send Message</span>
      </span>
    </button>
  </div>
</form>

            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 right-[15%] -z-10 h-[358px] w-[816px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-gradient-to-tr lg:opacity-40"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
