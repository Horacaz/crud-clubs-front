import { screen, render } from "@testing-library/react";
import Error from "../Error";

describe("Error", () => {
  test("It renders component correctly", () => {
    render(
      <Error
        error={{ name: "Error", message: "Couldn't get Clubs from API" }}
      />,
    );
    screen.getByRole("heading", { name: "An error has ocurred" });
    screen.getByText("Couldn't get Clubs from API");
  });
});
