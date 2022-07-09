import { getAmountWithCounterWord } from "./string";

describe("string utils", () => {
  it("getAmountWithCounterWord", () => {
    expect(getAmountWithCounterWord(0, "year")).toBe("0 years");
    expect(getAmountWithCounterWord(1, "year")).toBe("1 year");
    expect(getAmountWithCounterWord(2, "year")).toBe("2 years");
  });
});
