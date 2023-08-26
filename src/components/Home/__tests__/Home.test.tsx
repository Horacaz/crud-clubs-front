import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  test("Home component renders correctly", () => {
    render(<Home />);
    screen.getByText("There are currently 19 clubs");
    screen.getByText("Aston Villa FC");
  });
});
