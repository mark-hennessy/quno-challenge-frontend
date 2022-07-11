import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Doctor } from "../@types/Doctor";
import { DOCTOR_LIST_TEST_ID } from "../constants/testIds";
import DoctorsPage from "../pages/doctors";
import doctorsJson from "./doctors.json";

const doctors = doctorsJson as Doctor[];

describe("doctors page", () => {
  beforeEach(() => {
    render(<DoctorsPage doctors={doctors} />);
  });

  it("shows unfiltered results", () => {
    const topResult = screen.getByTestId(DOCTOR_LIST_TEST_ID).firstChild;

    expect(topResult).toHaveTextContent("Dr. Lay Raphael");
    expect(topResult).toHaveTextContent("8.5");
  });

  it("supports filtering by best Qunoscore", () => {
    const bestQunoscoreFilterTab = screen.getByRole("button", {
      name: /Best Qunoscore/i,
    });

    fireEvent.click(bestQunoscoreFilterTab);
    const topResult = screen.getByTestId(DOCTOR_LIST_TEST_ID).firstChild;

    expect(topResult).toHaveTextContent("Dr. Cayla Loftie");
    expect(topResult).toHaveTextContent("9.7");
  });

  it("supports filtering by best reviews", () => {
    const bestReviewsFilterTab = screen.getByRole("button", {
      name: /Best reviews/i,
    });

    fireEvent.click(bestReviewsFilterTab);
    const topResult = screen.getByTestId(DOCTOR_LIST_TEST_ID).firstChild;

    expect(topResult).toHaveTextContent("Dr. Linus Rogier");
    expect(topResult).toHaveTextContent("5 (5 reviews)");
  });

  it("supports filtering by lowest price", () => {
    const lowestPriceFilterTab = screen.getByRole("button", {
      name: /Lowest price/i,
    });

    fireEvent.click(lowestPriceFilterTab);
    const topResult = screen.getByTestId(DOCTOR_LIST_TEST_ID).firstChild;

    expect(topResult).toHaveTextContent("Dr. Monty Guinan");
    expect(topResult).toHaveTextContent("€1,245");
  });
});
