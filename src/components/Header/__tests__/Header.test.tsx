import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("Header renders correctly", () => {
    const headerTitle = "Football Clubs";
    const subTitle = "(Create, Read, Update, Delete)";
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    screen.getByText(headerTitle);
    screen.getByText(subTitle);
  });
});
