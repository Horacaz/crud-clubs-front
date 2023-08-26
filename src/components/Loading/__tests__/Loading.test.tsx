import { screen, render } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading", () => {
  test("It renders component correctly", () => {
    render(<Loading />);
    screen.getByRole("status");
  });
});
