import { formatCurrency } from "./currency";

describe("currency utils", () => {
  it("formatCurrency", () => {
    expect(formatCurrency(0)).toBe("€0");
    expect(formatCurrency(100)).toBe("€100");
    expect(formatCurrency(2023)).toBe("€2,023");
    expect(formatCurrency(2023.0)).toBe("€2,023");
    expect(formatCurrency(2023.1)).toBe("€2,023");
    expect(formatCurrency(2023.5)).toBe("€2,024");
    expect(formatCurrency(2023.78)).toBe("€2,024");
    expect(formatCurrency(2023.783)).toBe("€2,024");
  });
});
