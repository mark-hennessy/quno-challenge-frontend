import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterTabs from "./index";

describe("FilterTabs", () => {
  let filterTabA: HTMLElement;
  let filterTabB: HTMLElement;

  beforeEach(() => {
    render(
      <FilterTabs
        filterOptions={[
          { text: "OptionA", onClick: () => {} },
          { text: "OptionB", onClick: () => {} },
        ]}
      />
    );

    filterTabA = screen.getByRole("button", {
      name: /OptionA/i,
    });

    filterTabB = screen.getByRole("button", {
      name: /OptionB/i,
    });
  });

  it("renders filter tabs", () => {
    expect(filterTabA).toBeInTheDocument();
    expect(filterTabB).toBeInTheDocument();
  });

  it("toggles selected filter tab", () => {
    expect(filterTabB).toHaveAttribute("aria-selected", "false");
    expect(filterTabB).not.toHaveClass("bg-amber-300");
    fireEvent.click(filterTabB);
    expect(filterTabB).toHaveAttribute("aria-selected", "true");
    expect(filterTabB).toHaveClass("bg-amber-300");
  });
});
