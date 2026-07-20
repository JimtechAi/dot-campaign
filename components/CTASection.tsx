import Link from "next/link";

type CTAAction = {
  label: string;
  href: string;
  secondary?: boolean;
};

type CTASectionProps = {
  title: string;
  description: string;
  actions: CTAAction[];
};

export function CTASection({ title, description, actions }: CTASectionProps) {
  return (
    <section className="rounded-3xl bg-[#0B5D3B] px-6 py-12 text-white shadow-lg shadow-[#0B5D3B]/20 sm:px-10">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-8 text-white/85">{description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {actions.map((action) => (
          <Link
            key={`${action.label}-${action.href}`}
            href={action.href}
            className={[
              "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
              action.secondary
                ? "border border-white/50 text-white hover:bg-white/10"
                : "bg-white text-[#0B5D3B] hover:bg-[#f0f4f1]",
            ].join(" ")}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
