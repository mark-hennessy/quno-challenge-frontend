import HeroListItem from "./heroListItem";

export default function HeroTextBlock() {
  return (
    <section className="px-5 py-10 bg-cyan-900">
      <h1 className="font-sans text-5xl leading-tight text-white mb-12">
        FUE Hair Transplant Clinics
      </h1>
      <ul>
        <HeroListItem text="Only professionally-vetted doctors" />
        <HeroListItem text="Personal support service" />
        <HeroListItem text="Satisfaction & price match guarantee" />
      </ul>
    </section>
  );
}
