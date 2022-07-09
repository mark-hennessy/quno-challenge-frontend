import { PropsWithChildren } from "react";

function HeroTextBlockHighlights({ children }: PropsWithChildren<{}>) {
  return <ul className="grid gap-2">{children}</ul>;
}

function HeroTextBlockHighlight({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <img
        className="inline w-6 h-6 mr-3"
        src="/images/check.svg"
        alt="checkmark"
      />
      <span className="text-lg leading-8 text-white">{text}</span>
    </li>
  );
}

export default function HeroTextBlock() {
  return (
    <section className="px-5 py-10 bg-cyan-900">
      <h1 className="font-sans text-5xl leading-tight text-white mb-12">
        FUE Hair Transplant Clinics
      </h1>
      <HeroTextBlockHighlights>
        <HeroTextBlockHighlight text="Only professionally-vetted doctors" />
        <HeroTextBlockHighlight text="Personal support service" />
        <HeroTextBlockHighlight text="Satisfaction & price match guarantee" />
      </HeroTextBlockHighlights>
    </section>
  );
}
