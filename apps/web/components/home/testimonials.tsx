import { testimonials } from "@/lib/testimonials";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  number: string;
  featured?: boolean;
};

function TestimonialCard({
  quote,
  name,
  role,
  number,
  featured = false,
}: TestimonialCardProps) {
  return (
    <article
      className={[
        "group flex h-full flex-col border-[#E2E8F0]/10 transition-colors duration-300 hover:bg-[#1A2438]",
        featured ? "border-b p-7 sm:p-8 lg:p-10" : "border-b p-6 sm:p-7",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="type-caption text-[8px] text-[#22B8F0]">{number}</span>

        <span
          aria-hidden="true"
          className={[
            "font-serif leading-none text-[#22B8F0]/35 transition-colors duration-300",
            featured ? "text-5xl" : "text-3xl",
            "group-hover:text-[#22B8F0]",
          ].join(" ")}
        >
          “
        </span>
      </div>

      <blockquote
        className={[
          "type-body text-[#94A3B8]",
          featured
            ? "mt-10 max-w-[46rem] text-base leading-8 md:text-lg md:leading-9"
            : "mt-8 text-[15px] leading-7 md:text-base",
        ].join(" ")}
      >
        {quote}
      </blockquote>

      <div
        className={[
          "mt-auto border-t border-[#E2E8F0]/10",
          featured ? "mt-12 pt-6" : "mt-10 pt-5",
        ].join(" ")}
      >
        <p
          className={
            featured
              ? "type-h2 text-lg text-[#F8FAFC]"
              : "type-h2 text-base text-[#F8FAFC]"
          }
        >
          {name}
        </p>

        <p className="type-caption mt-2 text-[8px] text-[#64748B]">{role}</p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-[#E2E8F0]/10 bg-[#111827] px-margin py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_minmax(0,0.68fr)] lg:gap-14">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              08 / TESTIMONIALS
            </span>
          </div>

          <div className="min-w-0">
            <p className="type-caption text-[9px] text-[#64748B]">
              WHAT PEOPLE SAY
            </p>

            <h2 className="type-h1 mt-5 max-w-5xl text-[clamp(2.25rem,7vw,5rem)]">
              Good work is
              <br />
              <span className="text-[#22B8F0]">felt by the people.</span>
            </h2>

            <p className="type-body mt-6 max-w-2xl text-base leading-7 text-[#94A3B8] md:mt-8 md:text-lg">
              The best relationships are the ones where the work feels connected
              — not like a list of separate services.
            </p>

            <div className="mt-10 grid border border-[#E2E8F0]/10 lg:mt-14 lg:grid-cols-2">
              <div className="border-b border-[#E2E8F0]/10 lg:col-span-1 lg:row-span-2 lg:border-b-0 lg:border-r">
                <TestimonialCard
                  number="01"
                  quote={testimonials[0].quote}
                  name={testimonials[0].name}
                  role={testimonials[0].role}
                  featured
                />
              </div>

              <div className="border-b border-[#E2E8F0]/10">
                <TestimonialCard
                  number="02"
                  quote={testimonials[1].quote}
                  name={testimonials[1].name}
                  role={testimonials[1].role}
                />
              </div>

              <div>
                <TestimonialCard
                  number="03"
                  quote={testimonials[2].quote}
                  name={testimonials[2].name}
                  role={testimonials[2].role}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 shrink-0 bg-[#22B8F0]" />
              <span className="type-caption text-[8px] text-[#64748B]">
                REAL RELATIONSHIPS · REAL WORK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
