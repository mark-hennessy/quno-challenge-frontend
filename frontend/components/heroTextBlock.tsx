import HeroTextBlockHighlight from "./heroTextBlockHighlight";
import HeroTextBlockHighlights from "./heroTextBlockHighlights";

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
