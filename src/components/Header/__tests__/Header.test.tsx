import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("Header renders correctly", () => {
    const headerTitle = "Football Clubs";
    const subTitle = "(Create, Read, Update, Delete)";
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    screen.getByText(headerTitle);
    screen.getByText(subTitle);
  });
});
