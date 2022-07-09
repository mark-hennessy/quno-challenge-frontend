import { useState } from "react";
import FilterTab from "../filterTab";
import styles from "./index.module.css";

type FilterOption = {
  text: string;
  onClick: () => void;
};

type Props = {
  filterOptions: FilterOption[];
};

export default function FilterTabs({ filterOptions }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <section className="px-5 py-8">
      <div className={styles["hidden-scroll-area"]}>
        <ul className="inline-grid gap-3 grid-flow-col">
          {filterOptions.map((filterOption, i) => {
            return (
              <FilterTab
                key={filterOption.text}
                text={filterOption.text}
                selected={selectedIndex === i}
                onClick={() => {
                  filterOption.onClick();
                  setSelectedIndex(i);
                }}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
