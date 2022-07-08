import FilterTab from "../filterTab";
import styles from "./index.module.css";

export default function FilterTabs() {
  return (
    <section className="px-5 py-8">
      <div className={styles["hidden-scroll-area"]}>
        <ul className="inline-grid gap-3 grid-flow-col">
          <FilterTab text="Best Qunoscore" selected />
          <FilterTab text="Best reviews" />
          <FilterTab text="Lowest price" />
        </ul>
      </div>
    </section>
  );
}
