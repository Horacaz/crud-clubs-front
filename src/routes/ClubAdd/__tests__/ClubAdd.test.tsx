import { screen, render } from "@testing-library/react";
import ClubAdd from "../ClubAdd";

describe("ClubAdd", () => {
  test("It renders component correctly", () => {
    render(<ClubAdd />);
    screen.getByLabelText("Club Name");
  });
});
