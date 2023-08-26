import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("Header renders correctly", () => {
    const headerTitle = "FootballClubs";
    const subTitle = "(Create, Read, Update, Delete)";
    render(<Header />);
    screen.getByText(headerTitle);
    screen.getByText(subTitle);
  });
});
